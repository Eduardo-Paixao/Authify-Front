"use client";
import Button from "@/components/Button";
import { Input, InputRadio } from "@/components/Input";
import { UPDATE_USER } from "@/graphql/mutation/userMutation";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useToastfy } from "@/hooks/useToastfy";
import { useUserForm } from "@/hooks/useUserForm";
import { useMutation } from "@apollo/client";
import React, { useContext, useEffect, useRef } from "react";
import { EditUserModalProps, FormDataProps } from "./types";
import {  currentUserContext } from "@/contexts/CurrentUserContext";
import { UserListContext } from "@/contexts/userListContext";

const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  setIsOpen,
  user,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { showError, showSuccess } = useToastfy();
  const { roles, email } = useContext(currentUserContext);
  const { refetch, page } = useContext(UserListContext);
  const isCurrentUser = email === user?.email;
  const isUpdatePermission = roles[0].name === 'read' || isCurrentUser;

  useClickOutside(
    modalRef,
    () => {
      setIsOpen(false);
    },
    isOpen
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useUserForm(false);
  const [UpdateUser, { loading }] = useMutation(UPDATE_USER, {
    onCompleted(data) {
      showSuccess(`Usuário, ${data.update.name} alterado com sucesso!`);
      setIsOpen(false);
      refetch({
        variables: {
          page,
          limit: 3,
        },
      });
      reset();
    },
    onError(error) {
      showError(`${error?.message}`);
    },
  });

  const onSubmit = (formData: FormDataProps) => {
    UpdateUser({
      variables: {
        name: formData.name,
        roles: formData.roles,
        email: formData.email,
      },
    });
  };

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        roles: user.roles[0].name,
      });
    }
  }, [user]);

  return (
    <>
      {isOpen && (
        <div className="bg-[#09090a8a] absolute w-full top-[-113px] h-[100vh] flex justify-center items-center ">
          <div
            ref={modalRef}
            className="bg-[#f1f1f1] dark:bg-[#27272A] p-4 w-full max-w-[400px] rounded-2xl"
          >
            <section className="flex justify-between pb-4 text-[#553a93] dark:text-[#A1A1AA]">
              <span>Alteração de usuários</span>
              <p
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 text-center rounded-sm cursor-pointer hover:brightness-120 hover:bg-red-500 dark:hover:bg-[#52525B] hover:text-[#fff] "
              >
                X
              </p>
            </section>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Input
                placeholder="Nome"
                label="Nome"
                {...register("name")}
                error={errors?.name?.message}
              />
              <section className="flex gap-4 py-4 justify-center">
                <InputRadio
                  label="Admin"
                  value="admin"
                  {...register("roles")}
                  disabled={isUpdatePermission}
                />
                <InputRadio
                  label="Usuário"
                  value="read"
                  {...register("roles")}
                  disabled={isUpdatePermission}
                />
                <InputRadio
                  label="Editor"
                  value="write"
                  {...register("roles")}
                  disabled={isUpdatePermission}
                />
              </section>
              <p className="text-red-500 text-sm text-center pb-4 ">
                {errors.roles ? errors.roles.message : ""}
                {isCurrentUser && "Usuários não podem alterar suas permissões"}<br/>
                {roles[0]?.name === "read" && "Seu usuário não pode alterar as permossões"}
              </p>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Salvar"
                )}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditUserModal;

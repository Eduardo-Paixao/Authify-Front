"use client";
import Button from "@/components/Button";
import { Input, InputRadio } from "@/components/Input";
import { UPDATE_USER } from "@/graphql/mutation/userMutation";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useToastfy } from "@/hooks/useToastfy";
import { useUserForm } from "@/hooks/useUserForm";
import { useMutation } from "@apollo/client";
import React, { useEffect, useRef } from "react";
import { EditUserModalProps, FormDataProps } from "./types";

const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  setIsOpen,
  user,
  refetch,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, () => setIsOpen(false), isOpen);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useUserForm(false);
  const { showError, showSuccess } = useToastfy();
  const [UpdateUser, { loading }] = useMutation(UPDATE_USER, {
    onCompleted(data) {
      showSuccess(`Usuário, ${data.update.name} alterado com sucesso!`);
      setIsOpen(false);
      refetch();
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
        <div className="bg-[#09090a8a] absolute w-full -top-32 h-[100vh] flex justify-center items-center ">
          <div
            ref={modalRef}
            className="bg-[#27272A] p-4 w-full max-w-[400px] rounded-2xl"
          >
            <section className="flex justify-between pb-4 text-[#A1A1AA]">
              <span>Alteração de usuários</span>
              <p
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 text-center rounded-sm cursor-pointer hover:brightness-120 hover:bg-[#52525B] hover:text-[#fff] "
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
                />
                <InputRadio
                  label="Usuário"
                  value="read"
                  {...register("roles")}
                />
                <InputRadio
                  label="Editor"
                  value="write"
                  {...register("roles")}
                />
              </section>
              <p className="text-red-500 text-sm text-center pb-4 ">
                {errors.roles ? errors.roles.message : ""}
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

"use client";
import { GET_USERS } from "@/graphql/queries/userQueries";
import { useMutation, useQuery } from "@apollo/client";
import Image from "next/image";
import AddUserIcon from "@/undraw_updates_wm27.svg";
import EditIcon from "@/edit-icon.svg";
import Modal from "@/components/Modal";
import { Input, InputRadio } from "@/components/Input";
import Button from "@/components/Button";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UPDATE_USER } from "@/graphql/mutation/userMutation";
import { useToastfy } from "@/hooks/useToastfy";

const schema = z.object({
  name: z
    .string()
    .min(8, "Nome inválido")
    .max(30, "Nome inválido, utilize apeas nome e sobre nome"),
  role: z.enum(["admin", "write", "read"], {
    errorMap: () => ({ message: "Selecione uma opção." }),
  }),
  email: z.string().email("E-mail inválido"),
});
type FormData = z.infer<typeof schema>;

interface UserProps {
  name: string;
  email: string;
  roles: {
    name: "admin" | "write" | "read";
    id: number;
  }[];
}

export default function userList() {
  const { data, refetch } = useQuery(GET_USERS);
  const { showError, showSuccess } = useToastfy();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, () => setIsOpen(false), isOpen);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (formData: FormData) => {
    UpdateUser({
      variables: {
        name: formData.name,
        roles: formData.role,
        email: formData.email,
      },
    });
  };

  const handleUseredit = (user: UserProps) => {
    reset({
      name: user.name,
      role: user.roles[0].name,
      email: user.email,
    });
    setIsOpen(true);
  };

  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center gap-5 mt-5">
        <strong className="text-3xl">
          Adicione usuários no sistema para poder gerencialos
        </strong>
        <Image src={AddUserIcon} alt="lista de usuários vazia" />
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center w-full mt-5 relative">
        <table className="w-full bg-[#18181B] max-w-3xl text-center border-separate border-spacing-y-4 rounded-2xl p-4 pt-0">
          <thead>
            <tr>
              <th className="px-4 py-2">Nome</th>
              <th className="px-4 py-2">E-mail</th>
              <th className="px-4 py-2">Permissão</th>
              <th className="px-4 py-2">Editar</th>
            </tr>
          </thead>
          <tbody>
            {data?.users?.map((user: UserProps, index: number) => (
              <tr className="bg-[#27272A] hover:brightness-125" key={index}>
                <td className="px-4 py-3 rounded-l-lg">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.roles[0].name}</td>
                <td className="px-4 py-3 rounded-r-lg ">
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => handleUseredit(user)}
                  >
                    <Image src={EditIcon} alt="editar" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal isOpen={isOpen}>
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
                <InputRadio label="Admin" value="admin" {...register("role")} />
                <InputRadio
                  label="Usuário"
                  value="write"
                  {...register("role")}
                />
                <InputRadio label="Editor" value="read" {...register("role")} />
              </section>
              <p className="text-red-500 text-sm text-center pb-4 ">
                {errors.role ? errors.role.message : ""}
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
        </Modal>
      </div>
    </>
  );
}

"use client";
import { GET_USERS } from "@/graphql/queries/userQueries";
import { useQuery } from "@apollo/client";
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

const schema = z.object({
  name: z
    .string()
    .min(8, "Nome inválido")
    .max(20, "Nome inválido, utilize apeas nome e sobre nome"),
  role: z.enum(["admin", "write", "read"], {
    errorMap: () => ({ message: "Selecione uma opção." }),
  }),
});
type FormData = z.infer<typeof schema>;

export default function userList() {
  const { data, error } = useQuery(GET_USERS);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("1");
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, () => setIsOpen(false), isOpen);
  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

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
  const onSubmit = (formData: FormData) => {
    console.log(formData, "aqui");
  };

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
            {data?.users?.map((user: any, index: number) => (
              <tr className="bg-[#27272A] hover:brightness-125" key={index}>
                <td className="px-4 py-3 rounded-l-lg">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.roles[0].name}</td>
                <td className="px-4 py-3 rounded-r-lg ">
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => setIsOpen(true)}
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
            className="bg-[#27272A] p-4 w-full max-w-xl rounded-2xl"
          >
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
                  {...register("role")}
                />
                <InputRadio
                  label="Usuário"
                  value="write"
                  {...register("role")}
                />
                <InputRadio
                  label="Editor"
                  value="read"
                  {...register("role")}
                />
              </section>
              <p className="text-red-500 text-sm text-center pb-4 ">
                {errors.role ? errors.role.message : ""}
              </p>
              <Button type="submit">Salvar</Button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}

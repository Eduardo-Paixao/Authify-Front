"use client";
import Button from "@/components/Button";
import { Input, InputRadio } from "@/components/Input";
import { useUserForm } from "@/hooks/useUserForm";
import { FormDataProps } from "../userList/components/types";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "@/graphql/mutation/userMutation";
import { useToastfy } from "@/hooks/useToastfy";
import { useRouter } from "next/navigation";

const addUser = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useUserForm(true);
  const { showError, showSuccess } = useToastfy();
  const {push} = useRouter()
  const [Register, { loading }] = useMutation(CREATE_USER, {
    onCompleted(data) {
      showSuccess(`Usuário, ${data.register.name} cadastrado com sucesso!`);
      push('/private/userList')
    },
    onError(error) {
      showError(`${error?.message}`);
    },
  });

  const onSubmit = (formData: FormDataProps) => {
    Register({
      variables: {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        roles: formData.roles,
      },
    });
  };
  return (
    <>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col bg-[#27272A] gap-4 p-5 mt-9 max-w-xl items-center rounded-2xl"
        >
          <Input
            label="Nome"
            placeholder="nome"
            {...register("name")}
            error={errors?.name?.message}
          />
          <Input
            label="E-mail"
            placeholder="E-mail"
            {...register("email")}
            error={errors?.email?.message}
          />
          <Input
            label="Senha"
            placeholder="Senha"
            {...register("password")}
            error={errors?.password?.message}
          />
          <Input
            label="Confirmação de senha"
            placeholder="Confirmação de senha"
            {...register("confirmPassword")}
            error={errors?.confirmPassword?.message}
          />

          <section className="flex justify-evenly w-full">
            <InputRadio label="Admin" value={"admin"} {...register("roles")} />
            <InputRadio label="Editor" value={"write"} {...register("roles")} />
            <InputRadio label="Usuário" value={"read"} {...register("roles")} />
          </section>
          <p className="text-red-500 text-sm text-center h-5 ">
            {errors.roles ? errors.roles.message : ""}
          </p>
          <Button type="submit" disabled={loading} className="max-w-36">
            {loading ? (
              <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Salvar"
            )}
          </Button>
        </form>
      </div>
    </>
  );
};

export default addUser;

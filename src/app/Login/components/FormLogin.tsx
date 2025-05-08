"use client";
import Button from "@/components/Button";
import { Input } from "@/components/Input";
import React from "react";
import Image from "next/image";
import passwordImage from "@/undraw_my-password_iyga.svg";
import { LOGIN_USER } from "@/graphql/mutation/userMutation";
import { useToastfy } from "@/hooks/useToastfy";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string(),
});
type FormData = z.infer<typeof schema>;

const FormLogin: React.FC = () => {
  const { showSuccess, showError } = useToastfy();
  const { push } = useRouter();
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      showSuccess(`Bem-vindo, ${data.login.user.name}!`);
      push("/private/userList");
    },
    onError(error) {
      showError(`${error?.message}`);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (formData: FormData) => {
    loginUser({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full flex flex-col justify-center items-center">
      <strong className="w-full flex p-4 justify-center text-xl xl:text-5xl dark:text-[#fff]">Login</strong>
      <div className="flex flex-col gap-4 w-full h-[calc(100vh-182px)] max-w-[535px] xl:max-w-none  xl:h-[calc(100vh-275px)] p-4 items-center justify-center bg-[#F2ECFF]/85 border-4 border-[#8257E5] rounded-[24px] xl:rounded-[73px]">
        <div className="flex flex-col xl:flex-row w-full justify-evenly items-center">
          <Image src={passwordImage} alt="Login" className="w-full max-w-[160px] sm:max-w-[300px] xl:max-w-[550px]" />
          <section className="w-full max-w-[400px] flex flex-col items-center">
            <Input
              label="E-mail"
              type="email"
              title="E-mail"
              placeholder="E-mail"
              {...register("email")}
              error={errors?.email?.message}
              className="!bg-[#f2f2f2] !outline-[#A1A1AA] !text-[#27272A]"
              classNameLabel="!text-[#27272A]"
              />
            <Input
              label="Senha"
              type="password"
              title="Senha"
              placeholder="Senha"
              {...register("password")}
              className="!bg-[#f2f2f2] !outline-[#A1A1AA] !text-[#27272A]"
              classNameLabel="!text-[#27272A]"
            />

            <Button type="submit" disabled={loading}>
              {loading ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Entrar"
              )}
            </Button>

            <p className="text-xs text-[#A1A1AA] mt-4">
              Feito com <span className="text-[#8257E5] text-[16px]">♥</span>{" "}
              pelo Paixão
            </p>
          </section>
        </div>
      </div>
    </form>
  );
};

export default FormLogin;

"use client";
import Button from "@/components/Button";
import {Input} from "@/components/Input";
import passwordImage from "@/undraw_my-password_iyga.svg";
import Image from "next/image";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/graphql/mutation/userMutation";
import { useToastfy } from "@/hooks/useToastfy";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string(),
});
type FormData = z.infer<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { showSuccess, showError } = useToastfy();
  const {push} = useRouter();
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      showSuccess(`Bem-vindo, ${data.login.user.name}!`);
      push('/private/userList')
    },
    onError(error) {
      showError(`${error?.message}`);
    },
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex justify-evenly h-screen flex-row p-4">
        <div className="max-w-[1440px] flex items-center">
          <EmblaCarousel />
        </div>
        <div className="flex flex-col gap-4 bg-[#18181B] min-w-[336px] rounded-xl p-4 items-center self-center">
          <strong>Login</strong>
          <Image
            src={passwordImage}
            alt="Login"
            className="max-w-[269px] max-h-[334px]"
          />
          <Input
            label="E-mail"
            type="email"
            title="E-mail"
            placeholder="E-mail"
            {...register("email")}
            error={errors?.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            title="Senha"
            placeholder="Senha"
            {...register("password")}
          />

          <Button type="submit" disabled={loading}>
            {loading ? (
              <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Entrar"
            )}
          </Button>

          <p className="text-xs text-[#A1A1AA]">Feito com ♥ pelo Paixão</p>
        </div>
      </div>
    </form>
  );
}

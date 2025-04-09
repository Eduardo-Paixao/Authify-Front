import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useUserForm = (requirePassword: boolean = false) => {
  const schema = z
    .object({
      name: z
        .string()
        .min(8, "Nome inválido")
        .max(30, "Nome inválido, utilize apeas nome e sobre nome"),
      roles: z.enum(["admin", "write", "read"], {
        errorMap: () => ({ message: "Selecione uma opção." }),
      }),
      email: z.string().email("E-mail inválido"),
      password: requirePassword
        ? z.string().min(8, "A senha deve conter pelo menos oito caracteres")
        : z.string().optional(),
      confirmPassword: z.string().optional(),
    })
    .refine((data) => {
      return (
        !data.password || data.password === data.confirmPassword,
        {
          message: "As senhas não coincidem",
          path: ["confirmPassword"],
        }
      );
    });
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  return methods;
};

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useUserForm = (requirePassword: boolean = false) => {
  const schema = z
    .object({
      name: z
        .string()
        .min(8, "Nome inválido")
        .max(30, "Nome inválido, utilize apeas nome e sobre nome")
        .optional(),
      email: z.string().email("E-mail inválido").optional(),
      password: requirePassword
        ? z.string().min(8, "A senha deve conter pelo menos oito caracteres")
        : z.string().optional(),
      confirmPassword: z.string().min(1,'Este campo é obrigatório').optional(),
      roles: z
      .string()
      .optional()
      .nullable()
      .refine((val) => ["admin", "write", "read"].includes(val!), {
        message: "Selecione uma opção válida.",
      }),
    })
    .superRefine(({ password, confirmPassword }, ctx) => {
      if (password !== confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "As senhas não coincidem",
          path: ["confirmPassword"],
        });
      }
    });
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  return methods;
};

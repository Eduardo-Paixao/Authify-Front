import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useUserForm = (requirePassword: boolean = false) => {
  const schema = z
    .object({
      name: z
        .string()
        .min(8, "Nome inválido")
        .max(30, "Nome inválido, utilize apenas nome e sobre nome")
        .optional()
        .refine((name) => {
          let onlyLetters = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(String(name));

          let noRepeats = !/([a-zA-Z])\1{2,}/g.test(String(name));

          return onlyLetters && noRepeats;
        }, "Nome inválido. Utilize apenas letras e verifique a ortografia."),
      email: z
        .string()
        .email("E-mail inválido")
        .optional()
        .refine((email) => {
          let noRepeats = !/([a-zA-Z0-9])\1{4,}/g.test(String(email));
          return noRepeats;
        }, "E-mail inválido"),
      password: requirePassword
        ? z.string().min(8, "A senha deve conter pelo menos oito caracteres")
        : z.string().optional(),
      confirmPassword: z.string().min(1, "Este campo é obrigatório").optional(),
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

import { z } from "zod";

export const signupFormSchema = z.object({
  fullName: z.string().min(1, { message: "O nome completo é obrigatório" }),
  cpf: z
    .string()
    .regex(/\d{3}\.\d{3}\.\d{3}-\d{2}/, {
      message: "O CPF fornecido não é válido",
    })
    .transform((v) => v.replace(/[^\d]/g, "")),
  birthDate: z
    .string()
    .min(10, { message: "A data de nascimento fornecida não é válida" }),
  // z.coerce.date({
  //   message: "A data de nascimento fornecida não é válida",
  // }),
  email: z.email({ message: "O e-mail fornecido não é válido" }),
  phone: z
    .string()
    .regex(/\(\d{2}\) \d{4,5}-\d{4}/, {
      message: "O número de telefone fornecido não é válido",
    })
    .transform((v) => v.replace(/[^\d]/g, "")),
  graduationYear: z
    .string()
    .regex(/^\d{4}$/, { message: "O ano de graduação fornecido não é válido" })
    .transform(Number),
  whatsappOptIn: z.boolean(),
});

export type TSignUpFormData = z.infer<typeof signupFormSchema>;

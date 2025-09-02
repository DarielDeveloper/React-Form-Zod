import z from "zod";

//Creando esquema para el control de las validaciones
export const schema = z
  .object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.email("Correo invalido").min(1, "El email es obligatorio"),
    password: z.string().min(6, "Debe contener mínimo 6 caracteres"),
    confirmPassword: z.string().min(6, "Debe contener mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "No coincide la contraseña",
    path: ["confirmPassword"],
  });

export type formValues = z.infer<typeof schema>;

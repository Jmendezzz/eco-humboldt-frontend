import { z } from "zod";

export const registerSchema = z.object({
    firstName: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(50, "Nombre demasiado largo"),
    lastName: z
        .string()
        .min(2, "El apellido debe tener al menos 2 caracteres")
        .max(50, "Apellido demasiado largo"),
    email: z
        .string()
        .min(1, "El correo es obligatorio")
        .email("Formato de correo no válido")
        .refine((val) => val.endsWith("@cue.edu.co") || val.endsWith("@unihumboldt.edu.co"), {
            message: "El correo debe ser el institucional.",
        }),
    password: z
        .string()
        .nonempty("La constrasena es requerida")
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

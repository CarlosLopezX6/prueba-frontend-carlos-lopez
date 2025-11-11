import { z } from "zod";


export const userSchema = z.object({

    firstName: z.string()
        .min(3, "El nombre debe tener al menos 3 caracteres."),

    lastNamePaternal: z.string()
        .min(3, "El apellido paterno debe tener al menos 3 caracteres."),

    lastNameMaternal: z.string()
        .min(3, "El apellido materno debe tener al menos 3 caracteres."),

    email: z.email("Correo inválido.")
        .min(1, "El correo es obligatorio."),

    gender: z.string()
        .min(3, "El genero es obligatorio."),
    
    city: z.string()
        .min(3, "La ciudad es obligatoria."),
    
    state: z.string()
        .min(3, "El estado es obligatorio."),
    
    country: z.string()
        .min(3, "El país es obligatorio."),
    
    image: z.string().optional()

});

export type UserSchemaType = z.infer<typeof userSchema>;
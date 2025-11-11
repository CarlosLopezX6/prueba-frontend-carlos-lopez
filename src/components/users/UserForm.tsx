import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useUsersContext } from "../../context/users/useUsersContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type UserSchemaType } from "../../zodSchemas/userSchema";
import { ActionBtn } from "../ui/ActionBtn";
import { showToast } from "../../utils/showToast";
import { Building2, ChevronDown, Image, Mail, User } from "lucide-react";
import type { IUser } from "../../interfaces/users/types";


export const UserForm = () => {

    const { addUserDispatch } = useUsersContext();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<UserSchemaType>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            firstName: "",
            lastNamePaternal: "",
            lastNameMaternal: "",
            email: "",
            gender: "",
            city: "",
            state: "",
            country: "",
            image: ""
        }
    });


    const onSubmit = async (values: UserSchemaType) => {
        const fullName = `${values.firstName} ${values.lastNamePaternal} ${values.lastNameMaternal}`;

        const newUser: IUser = {
            id: crypto.randomUUID(),
            name: fullName,
            email: values.email,
             image: values.image ?? "",
            gender: values.gender as IUser["gender"],
            city: values.city,
            state: values.state,
            country: values.country,
            status: "general",
        };

        addUserDispatch(newUser);

        showToast.success("Usuario agregado correctamente.");
        navigate("/users");
    };

    
    const genders = [ 
        { label: "Masculino", value: "male" },
        { label: "Femenino", value: "female" },
        { label: "Otro", value: "other" },
    ]


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-1 mt-10 animate-fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">

                <div className="mb-4">
                    <label
                        htmlFor="firstName"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Nombre
                    </label>

                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <User size={18} />
                        </span>

                        <input
                            id="firstName"
                            type="text"
                            placeholder="Primer nombre"
                            {...register("firstName")}
                            className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-10 text-sm 
                                placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="lastNamePaternal"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Apellido Paterno
                    </label>

                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <User size={18} />
                        </span>

                        <input
                            id="lastNamePaternal"
                            type="text"
                            placeholder="Apellido Paterno"
                            {...register("lastNamePaternal")}
                            className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-10 text-sm 
                                placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    {errors.lastNamePaternal && <p className="text-red-500 text-sm">{errors.lastNamePaternal.message}</p>}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="lastNameMaternal"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Apellido Materno
                    </label>

                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <User size={18} />
                        </span>

                        <input
                            id="lastNameMaternal"
                            type="text"
                            placeholder="Apellido Materno"
                            {...register("lastNameMaternal")}
                            className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-10 text-sm 
                                placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    {errors.lastNameMaternal && <p className="text-red-500 text-sm">{errors.lastNameMaternal.message}</p>}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Género
                    </label>

                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                        <User size={18} />
                        </span>

                        <select
                            id="gender"
                            {...register("gender")}
                            defaultValue=""
                            className="mt-1 block w-full appearance-none rounded-lg border  border-gray-300 py-2.5 pr-3 pl-10 text-sm text-gray-600
                                placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        >
                            <option value="">
                                -- Selecciona tu género --
                            </option>
                            {genders.map((g) => (
                                <option key={g.value} value={g.value}>
                                    {g.label}
                                </option>
                            ))}
                        </select>

                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 pointer-events-none">
                            <ChevronDown size={18} />
                        </span>
                    </div>

                    {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Correo
                    </label>

                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <Mail size={18} />
                        </span>

                        <input
                            id="email"
                            type="email"
                            placeholder="Ej. user@email.com"
                            {...register("email")}
                            className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-10 text-sm 
                                placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="city"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Ciudad
                    </label>

                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <Building2 size={18} />
                        </span>

                        <input
                            id="city"
                            type="text"
                            placeholder="Ingresa tu ciudad"
                            {...register("city")}
                            className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-10 text-sm 
                                placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="state"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Estado
                    </label>

                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <Building2 size={18} />
                        </span>

                        <input
                            id="state"
                            type="text"
                            placeholder="Ingresa tu estado"
                            {...register("state")}
                            className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-10 text-sm 
                                placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="country"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        País
                    </label>

                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <Building2 size={18} />
                        </span>

                        <input
                            id="country"
                            type="text"
                            placeholder="Ingresa tu país"
                            {...register("country")}
                            className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-10 text-sm 
                                placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Imagen
                    </label>

                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <Image size={18} />
                        </span>

                        <input
                            id="image"
                            type="text"
                            placeholder="Ingresa la URL de una imagen"
                            {...register("image")}
                            className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-10 text-sm 
                                placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>
                </div>

            </div>
                    
            <div className="flex justify-end gap-3 mt-6">
                <ActionBtn type="submit" variant="confirm">
                    Aceptar
                </ActionBtn>
                 <ActionBtn variant="cancel" onClick={() => navigate('/users')}>
                    Cancelar
                </ActionBtn>
            </div>

        </form>
    )
}

import type { IUser } from "../../interfaces/users/types";


interface Props {
  user: IUser;
}
export const UserDetailCard = ({ user }: Props) => {

    const defaultImage = "/imagePlaceholder.webp";

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = defaultImage;
    };

    const genderMap: Record<IUser["gender"], string> = {
        male: "Masculino",
        female: "Femenino",
        other: "Otro",
    };

    const genderLabel = genderMap[user.gender] || "Desconocido";


    return (
        <div className="flex items-center justify-center p-4">
            <div
                className="
                    flex w-full
                    max-w-lg flex-col items-center rounded-lg
                    bg-white p-8 shadow-xl/30
                "
            >

                <img
                    src={user.image || defaultImage}
                    alt={ user.name }
                    className="mb-8 h-48 w-48 rounded-md object-cover"
                    onError={handleImageError}
                />

                <div className="w-full space-y-2 text-left text-base text-gray-700 md:text-lg">
                    <p><span className="font-semibold">Nombre:</span> {user.name} </p>
                    <p><span className="font-semibold">Correo:</span> {user.email} </p>
                    <p><span className="font-semibold">Género:</span> {genderLabel} </p>
                    <p><span className="font-semibold">Ciudad:</span> {user.city} </p>
                    <p><span className="font-semibold">Estado:</span> {user.state} </p>
                    <p><span className="font-semibold">País:</span> {user.country} </p>
                </div>

            </div>
        </div>
    );
};
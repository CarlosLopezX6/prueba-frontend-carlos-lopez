import { type ReactNode } from "react";


interface Props {
    variant?: "confirm" | "cancel";
    children: ReactNode;
    onClick?: () => void;
    icon?: ReactNode;
    type?: "button" | "submit" | "reset";
}
export const ActionBtn = ({ 
    variant = "confirm", 
    children, 
    onClick, 
    icon,
    type
}: Props) => {

    const baseStyles = `
        flex items-center justify-center gap-2
        rounded-md px-4 py-2 font-medium
        transition-colors duration-200
        focus:outline-none
    `;

    const variantStyles =
        variant === "confirm"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400";
    
    const buttonType = type || (variant === "confirm" ? "submit" : "button");


    return (
        <button type={buttonType} onClick={onClick} className={`${baseStyles} ${variantStyles} cursor-pointer`}>
            { icon && <span className="size-5 mb-0.5 mr-1">{icon}</span> }
            { children }
        </button>
    );
};
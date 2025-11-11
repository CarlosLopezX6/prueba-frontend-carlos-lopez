import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { useDraggable } from '@dnd-kit/core';
import type { IUser } from '../../interfaces/users/types';


interface Props {
  user: IUser;
}
export const UserCard = ({ user }: Props) => {

    const navigate = useNavigate();
    const dragStarted = useRef(false);
    const defaultImage = "/imagePlaceholder.webp";

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: user.id,
    });


    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = defaultImage;
    };

    const handlePointerDown = () => {
        dragStarted.current = false;
    };

    const handlePointerMove = () => {
        dragStarted.current = true;
    };

    const handlePointerUp = () => {
        if (!dragStarted.current) {
        navigate(`/users/${user.id}`);
        }
    };


    const style = {
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
        opacity: isDragging ? 0.5 : 1,
        transition: "transform 0.2s ease",
        cursor: "grab",
    };


    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className={`
                flex items-center gap-4 rounded-md border border-gray-200 bg-white 
                p-3 transition-colors duration-300 
                select-none hover:bg-blue-50
                ${isDragging ? "ring-2 ring-blue-400" : ""}
            `}
        >
            <img
                src={user.image || defaultImage}
                alt={user.name}
                className="h-14 w-14 rounded-md object-cover"
                onError={handleImageError}
            />

            <div className="flex flex-col">
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
            </div>
        </div>
    );
};


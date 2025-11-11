import {
    DndContext,
    useSensor,
    useSensors,
    MouseSensor,
    TouchSensor,
} from "@dnd-kit/core";
import { useNavigate } from "react-router";
import { useUsersContext } from "../../context/users/useUsersContext";
import { UserCard } from "./UserCard";
import { ActionBtn } from "../ui/ActionBtn";
import { DroppableColumn } from "../ui/DroppableColumn";
import { ListsSkeleton } from "../skeletons/ListsSkeleton";
import { CirclePlus } from "lucide-react";


export const UsersSection = () => {

    const navigate = useNavigate();
    const { usersState, isLoading, updateUserStatusDispatch } = useUsersContext();
    const { usersList } = usersState;

    const generalUsers = usersList.filter((u) => u.status === "general");
    const selectedUsers = usersList.filter((u) => u.status === "selected");

    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleDragEnd = (event: any) => {
        const { over, active } = event;
        if (!over) return;

        const newStatus = over.id as "general" | "selected";

        const draggedUser = usersList.find((u) => u.id === active.id);

        if (draggedUser && draggedUser.status !== newStatus) {
            updateUserStatusDispatch(draggedUser.id, newStatus);
        }
    };


    if (isLoading) {
        return <ListsSkeleton />;
    }


    return (
        <>
            <div className="m-4 flex justify-end">
                <ActionBtn icon={<CirclePlus />} onClick={() => navigate("/users/new")}>
                    Agregar Usuario
                </ActionBtn>
            </div>

            <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                <div
                    className="
                        grid grid-cols-1 gap-6 
                        lg:grid-cols-2 lg:gap-8
                        lg:divide-x lg:divide-gray-200
                    "
                >
                    <DroppableColumn id="general" title="Lista general de usuarios">
                        {generalUsers.length === 0 ? (
                            <p className="text-center text-sm text-gray-500">
                                No se encontraron usuarios.
                            </p>
                        ) : (
                            generalUsers.map((u) => <UserCard key={u.id} user={u} />)
                        )}
                    </DroppableColumn>

                    <DroppableColumn id="selected" title="Grupo seleccionado">
                        {selectedUsers.length === 0 ? (
                            <p className="text-center text-sm text-gray-500">
                                No se encontraron usuarios.
                            </p>
                        ) : (
                            selectedUsers.map((u) => <UserCard key={u.id} user={u} />)
                        )}
                    </DroppableColumn>
                </div>
            </DndContext>
        </>
    );
};



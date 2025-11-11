import { useDroppable } from "@dnd-kit/core";


export const DroppableColumn = ({
    id,
    title,
    children,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
}) => {
    
    const { isOver, setNodeRef } = useDroppable({ id });

    return (
        <div
            ref={setNodeRef}
            className={`space-y-3 rounded-md p-4 transition-colors ${
                isOver ? "bg-blue-50 ring-2 ring-blue-400" : "bg-white"
            }`}
        >
            <h2 className="mb-6 text-lg font-semibold text-gray-800">{title}</h2>
            {children}
        </div>
    );
};
import { UserCardSkeleton } from "./UserCardSkeleton"


export const ListsSkeleton = () => {
    return (
        <section
            className="
                grid grid-cols-1 gap-6 
                lg:grid-cols-2 lg:gap-8
                lg:divide-x lg:divide-gray-200
            "
        >
            <div className="space-y-3 p-4">
                <h2 className="mb-6 text-lg font-semibold text-gray-800">
                    Lista general
                </h2>
                {[...Array(4)].map((_, i) => (
                    <UserCardSkeleton key={i} />
                ))}
            </div>

            <div className="space-y-3 p-4 lg:pl-8">
                <h2 className="mb-6 text-lg font-semibold text-gray-800">
                    Grupo seleccionado
                </h2>
                {[...Array(4)].map((_, i) => (
                    <UserCardSkeleton key={i} />
                ))}
            </div>
        </section>
    )
}

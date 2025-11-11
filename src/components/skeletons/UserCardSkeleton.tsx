
export const UserCardSkeleton = () => {
    return (           
        <div className="flex animate-pulse items-center gap-4 rounded-md border border-gray-200 p-3">

            <div className="h-14 w-14 rounded-md bg-gray-300"></div>

            <div className="flex-1 space-y-6">
                <div className="space-y-2">
                    <div className="h-3 rounded bg-gray-300"></div>
                    <div className="h-3 rounded bg-gray-300"></div>
                </div>
            </div>
        </div>
    )
}

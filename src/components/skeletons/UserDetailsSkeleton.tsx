
export const UserDetailsSkeleton = () => {
    return (
        <div className="m-6">
            <div className="my-4 h-8 w-72 rounded bg-gray-300"></div>
            <div className="h-8 w-28 rounded bg-gray-300"></div>

            <div className="flex items-center justify-center p-4">
                <div
                    className="
                        flex w-full max-w-lg 
                        animate-pulse flex-col items-center rounded-lg
                        bg-white p-8 shadow-xl/30
                    "
                >

                    <div className="mb-8 h-48 w-48 rounded-md bg-gray-300"></div>

                    <div className="w-full space-y-4">
                        <div className="h-4 rounded bg-gray-300"></div>
                        <div className="h-4 rounded bg-gray-300"></div>
                        <div className="h-4 rounded bg-gray-300"></div>
                        <div className="h-4 rounded bg-gray-300"></div>
                        <div className="h-4 rounded bg-gray-300"></div>
                        <div className="h-4 rounded bg-gray-300"></div>
                    </div>

                </div>
            </div>      
        </div>
    )
}

import { Loader2Icon } from "lucide-react";


interface Props {
  className?: string;
}
export const AppSpinner = ({ className = "" }: Props) => {
    return (
        <div className='relative min-h-32 w-full'>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`flex items-center justify-center ${className}`}>
                    <Loader2Icon
                        role="status"
                        aria-label="Cargando"
                        className="size-14 text-blue-600 animate-spin"
                    />
                </div>
            </div>
        </div>
    );
};
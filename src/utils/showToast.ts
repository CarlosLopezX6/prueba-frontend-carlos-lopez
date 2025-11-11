import { toast } from 'sonner';


const toastConfig = {
    duration: 2500,
    position: "top-center" as const, 
}

export const showToast = {
    info: ( message: string ) => toast.info( message, toastConfig ),
    error: ( message: string ) => toast.error( message, toastConfig ),
    success: ( message: string ) => toast.success( message, toastConfig ),
    warning: ( message: string ) => toast.warning( message, toastConfig )
}
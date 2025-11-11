import { BrowserRouter } from "react-router"
import { AppRouter } from "./router/AppRouter"
import { Toaster } from "sonner"
import { UsersProvider } from "./context/users/UsersContext"


const App = () => {
    return (
        <BrowserRouter>
            <UsersProvider>
                <AppRouter />
                <Toaster richColors closeButton />
            </UsersProvider>
        </BrowserRouter>
    )
}

export default App
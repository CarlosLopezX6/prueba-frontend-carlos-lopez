import { Outlet } from "react-router"
import { Header } from "../components/ui/Header";


const AppLayout = () => {

    return (
        <main className="w-full">

            <Header />

            <div className="my-6 mx-0 md:m-6">
                <Outlet />
            </div>
        </main>
    )
}

export default AppLayout;
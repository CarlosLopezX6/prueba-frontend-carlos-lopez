import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router"
import AppLayout from "../layout/AppLayout"
import UsersPage from "../pages/UsersPage"
const UserDetailsPage = lazy(() => import("../pages/UserDetailsPage"));
const UserNewPage = lazy(() => import("../pages/UserNewPage"));
import { AppSpinner } from "../components/ui/AppSpinner";


export const AppRouter = () => {
    return (
        <Routes>

            <Route element={<AppLayout />}>
                <Route path="/users" element={<UsersPage />} />
                    <Route
                        path="/users/:userId"
                        element={
                            <Suspense fallback={ <AppSpinner /> }>
                                <UserDetailsPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/users/new"
                        element={
                            <Suspense fallback={ <AppSpinner /> }>
                                <UserNewPage />
                            </Suspense>
                        }
                    />
                <Route path="/*" element={<Navigate to="/users" replace />} />
            </Route>

        </ Routes>
    )
}

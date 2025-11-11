import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useUsersContext } from "../context/users/useUsersContext";
import { SectionTitle } from "../components/ui/SectionTitle";
import { GoBackButton } from "../components/ui/GoBackBtn";
import { UserDetailCard } from "../components/users/UserDetailCard";
import { UserDetailsSkeleton } from "../components/skeletons/UserDetailsSkeleton";
import type { IUser } from "../interfaces/users/types";


const UserDetailsPage = () => {
  
    const { userId } = useParams();
    const navigate = useNavigate();
    const { getUserById, isLoadingDetailsUser } = useUsersContext();
    const [user, setUser] = useState<IUser | null>(null);


    const loadUser = async () => {
        if (!userId) {
            navigate("/users", { replace: true });
            return;
        }

        const foundUser = await getUserById(userId);

        if (!foundUser) {
            navigate("/users", { replace: true });
        } else {
            setUser(foundUser);
        }
    };


    useEffect(() => {
        loadUser();
    }, []);


    if (isLoadingDetailsUser) return <UserDetailsSkeleton />

    if (!user) return null; 


    return (
        <div className="m-6">
            <SectionTitle title="Detalles del Usuario" />
            <GoBackButton goBackPath={"/users"} />
            <UserDetailCard user={user} />
        </div>
    );
};

export default UserDetailsPage

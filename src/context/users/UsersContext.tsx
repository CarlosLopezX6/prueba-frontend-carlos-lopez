import { createContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useUsersReducer } from "./useUsersReducer";
import { sleep } from "../../utils/sleep";
import type { UsersState } from "./usersReducer";
import type { IUser, IUsersAPIResponse } from "../../interfaces/users/types";


interface UsersContextProps {
    usersState: UsersState;
    isLoading: boolean;
    isLoadingDetailsUser: boolean;
    getUserById: (id: IUser["id"]) => Promise<IUser | null>
    setGeneralUsersDispatch: (users: IUser[]) => void;
    updateUserStatusDispatch: (id: IUser["id"], status: IUser["status"]) => void
    addUserDispatch: (user: IUser) => void
}

interface UsersProviderProps {
    children: React.ReactNode;
}


export const UsersContext = createContext<UsersContextProps>({} as UsersContextProps);


export const UsersProvider = ( { children }: UsersProviderProps ) => { 

    const { usersState, setGeneralUsersDispatch, updateUserStatusDispatch, addUserDispatch } = useUsersReducer();
    const { usersList } = usersState;
    const [isLoadingDetailsUser, setIsLoadingDetailsUser] = useState(false);


    const shouldFetch = usersList.length === 0;

    const { data, isLoading } = useFetch<IUsersAPIResponse>(
        shouldFetch ? "https://randomuser.me/api/?results=10" : null
    );


    const getUserById = async (id: IUser["id"]) => {

        setIsLoadingDetailsUser(true);

        await sleep(1); 

        const user = usersList.find( u => u.id === id) || null;

        setIsLoadingDetailsUser(false);

        return user;
    };

    useEffect(() => {
        if (data && shouldFetch) {

            const mappedUsers: IUser[] = data.results.map((u) => ({
                id: crypto.randomUUID(),
                name: `${u.name?.title} ${u.name?.first} ${u.name?.last}`,
                email: u.email,
                image: u.picture?.medium ?? "",
                gender: u.gender,
                city: u.location?.city,
                state: u.location?.state,
                country: u.location?.country,
                status: "general"
            }));

            setGeneralUsersDispatch(mappedUsers);
        }
    }, [data]);


    return (
        <UsersContext.Provider value={{
            usersState,
            isLoading,
            isLoadingDetailsUser,
            getUserById,
            setGeneralUsersDispatch,
            updateUserStatusDispatch,
            addUserDispatch
        }}>
            { children }
        </UsersContext.Provider>
    )
}
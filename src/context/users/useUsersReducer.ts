import { useEffect, useReducer } from "react";
import usersReducer, { usersInitialState, type UsersState } from "./usersReducer";
import type { IUser } from "../../interfaces/users/types";


export const useUsersReducer = () => {

    const [usersState, usersDispatch] = useReducer(usersReducer, usersInitialState, (initial) => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("usersState");
            return stored ? JSON.parse(stored) as UsersState : initial;
        }
        return initial;
    });


    useEffect(() => {
        localStorage.setItem("usersState", JSON.stringify(usersState));
    }, [usersState]);

    
    const setGeneralUsersDispatch = (users: IUser[]) => {
        usersDispatch({ 
            type: "SET_GENERAL_USERS", 
            payload: users 
        });
    };

    const updateUserStatusDispatch = (id: IUser['id'], status: IUser['status']) => {
        usersDispatch({
            type: "UPDATE_USER_STATUS",
            payload: { id, status }
        });
    };

    const addUserDispatch = (user: IUser) => {
        usersDispatch({
            type: "ADD_USER",
            payload: user,
        });
    };


    return {
        usersState,
        setGeneralUsersDispatch,
        updateUserStatusDispatch,
        addUserDispatch
    }
}
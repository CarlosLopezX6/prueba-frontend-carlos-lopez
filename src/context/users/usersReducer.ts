import type { IUser } from "../../interfaces/users/types";


export type UsersActions = 
    { type: "SET_GENERAL_USERS"; payload: IUser[] } |
    { type: "GET_USER_BY_ID"; payload: IUser['id'] } |
    { type: "ADD_USER"; payload: IUser } |
    { type: "UPDATE_USER_STATUS"; payload: { id: IUser['id']; status: IUser['status'] } };

export interface UsersState {
    usersList: IUser[];
}

export const usersInitialState: UsersState = {
    usersList: [],
}


const usersReducer = (state: UsersState, action: UsersActions): UsersState => {
    
    if( action.type === "SET_GENERAL_USERS" ){
        return {
            ...state,
            usersList: action.payload,
        }
    }

    if (action.type === "ADD_USER") {
        return {
            ...state,
            usersList: [...state.usersList, action.payload],
        };
    }

    if( action.type === "UPDATE_USER_STATUS" ){
        return {
            ...state,
            usersList: state.usersList.map(user =>
                user.id === action.payload.id
                    ? { ...user, status: action.payload.status }
                    : user
            ),
        };
    }
            
    return state;
}

export default usersReducer;
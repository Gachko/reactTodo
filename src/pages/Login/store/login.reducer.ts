import {LOGIN, LOGOUT} from "./login.actions";

export interface LoginReducer {
    user: string | null
}

const initialState: LoginReducer = {
    user: localStorage.getItem('user')
}
export const LoginReducer = ( state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
        }
        case LOGOUT:
            return {
                ...state,
                user: null
            }
        default:
            return state

    }
}

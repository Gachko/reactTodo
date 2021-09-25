import {UserInterface} from "../../../common/types/User.interface";
import {LOGIN, LOGOUT} from "./login.actions";

export interface LoginReducer {
    user: UserInterface | null
}

const initialState: LoginReducer = {
    user: null
}
export const LoginReducer = ( state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN:
            console.log(action.payload)
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

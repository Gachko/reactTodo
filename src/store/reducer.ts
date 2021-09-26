import { combineReducers } from 'redux'
import {LoginReducer} from "../pages/Login/store/login.reducer";
import {TodoReducer} from "../pages/Todo/store/todo.reducer";

export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    LoginReducer,
    TodoReducer
})


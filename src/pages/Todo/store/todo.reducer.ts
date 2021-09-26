import { TodoInterface } from '../../../common/types/Todo.interface'
import {
    ADD_TODO,
    CHECKED_TODO,
    DELETE_TODO,
    EDIT_TODO
} from './todo.actions'

export interface ITodoReducer {
    loading: boolean,
    todos: TodoInterface[] | []
}

const initialState: ITodoReducer = {
    todos: [],
    loading: false
}

export const TodoReducer = ( state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
        }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo: TodoInterface) => todo.id !== action.payload)
            }
        case CHECKED_TODO:
            return {
                ...state,
                todos: state.todos.map((todo: TodoInterface) => (todo.id === action.payload) ? {...todo, isComplete: !todo.isComplete} : todo)
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo: TodoInterface) => (todo.id === action.payload.id) ? {...todo, text: action.payload.newTitle} : todo)
            }
        default:
            return state

    }
}

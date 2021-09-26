import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import './TodoAdd.component.scss'
import { ADD_TODO } from '../../store/todo.actions'
import { idGenerator } from '../../../../common/utils/idGenerator'

export const TodoAdd = () => {

    const [todo, setTodo] = useState<string>('')

    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch({type: ADD_TODO, payload: {
                id: idGenerator(),
                text: todo,
                isComplete: false
         }})
        setTodo('')
    }

    return (
        <div className="todo-add">
            <TextField
                className="todo-add-input"
                label="Enter Todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}/>
            <Button
                disabled={todo.trim().length === 0}
                onClick={addTodo}
                className="todo-add-button"
                variant="contained"
                color="primary">
                Add
            </Button>
        </div>
    )
}

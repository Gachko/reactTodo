import React, {useState} from 'react'
import './TodoAdd.component.scss'
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const TodoAdd = () => {

    const [todo, setTodo] = useState<string>('')


    return (
        <div className='todo-add'>
            <TextField
                className='todo-add-input'
                label="Enter Todo"
                onChange={(e) => setTodo(e.target.value)}/>
            <Button
                disabled={todo.trim().length === 0}
                className='todo-add-button'
                variant="contained"
                color="primary">
                Add
            </Button>
        </div>
    )
}

import React from 'react'
import './TodoItems.component.scss'
import {TodoItem} from "../TodoItem/TodoItem.component";

export const TodoItems = () => {
    return (
        <div className='todo-items'>
            {[1,2,3].map((todo) => <TodoItem />)}
        </div>
    )
}

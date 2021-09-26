import React from 'react'
import { useSelector } from 'react-redux'
import './TodoItems.component.scss'
import { TodoItem } from '../TodoItem/TodoItem.component'
import { RootState } from '../../../../store/reducer'
import { Empty } from '../../../../common/components/Empty/Empty.component'

export const TodoItems = () => {

    const todo = useSelector((state: RootState) => state.TodoReducer.todos)

    if ( todo.length === 0 ) return <Empty text="No Todos" />

    return (
        <div className="todo-items">
            {todo.map((todo) => <TodoItem
                key={todo.id}
                item={todo}/>)}
        </div>
    )
}

import React from 'react'
import './Todo.page.scss'
import { TodoAdd } from './components/TodoAdd/TodoAdd.component'
import { TodoItems } from './components/TodoItems/TodoItems.component'
import { Header } from '../../common/components/Header/Header.component'

export const TodoPage = () => {
    return (
        <>
            <Header />
            <div className="todo-page">
                <TodoAdd />
                <TodoItems />
            </div>
        </>
    )
}

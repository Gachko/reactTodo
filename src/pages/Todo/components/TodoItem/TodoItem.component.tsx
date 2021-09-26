import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { FormControlLabel } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import './TodoItem.component.scss'
import { TodoInterface } from '../../../../common/types/Todo.interface'
import { CHECKED_TODO, DELETE_TODO } from '../../store/todo.actions'
import { Modal } from '../../../../common/components/Modal/Modal.component'
import { EditModal } from './EditModal/EditModal'

interface ITodoItem {
    item: TodoInterface
}

export const TodoItem: React.FC<ITodoItem> = ({
    item
}) => {

    const [ isDeleteModalOpen, setIsDeleteModalOpen ] = useState(false);
    const [ isEditModalOpen, setIsEditModalOpen ] = useState(false);

    const dispatch = useDispatch()

    const deleteTodo = () => setIsDeleteModalOpen(true)
    const editTodo = () => setIsEditModalOpen(true)
    const changeCompleteTodo = () => dispatch({type: CHECKED_TODO, payload: item.id})

    return (
        <div className="todo-item">
            <FormControlLabel
                control={
                    <Checkbox
                        className="todo-item-text"
                        checked={item.isComplete}
                        onChange={changeCompleteTodo}
                        color="primary"/>
                }
                label={<div className={item.isComplete ? "todo-item-text-complete" : ""}>{item.text}</div>}
            />
            <div className="todo-item-actions">
                <div className="todo-item-action">
                    <EditIcon
                        onClick = {editTodo}
                        className="todo-item-action-action"/>
                </div>
                <div className="todo-item-action">
                    <DeleteIcon
                        onClick = {deleteTodo}
                        className="todo-item-action-action"/>
                </div>
            </div>
            <Modal
                isOpen={isDeleteModalOpen}
                title="Are you sure?"
                onHandleSubmit={() => dispatch({type: DELETE_TODO, payload: item.id})}
                onHandleCLose={() => setIsDeleteModalOpen(false)} />
            <EditModal
                isOpen={isEditModalOpen}
                onHandleCLose={() => setIsEditModalOpen(false)}
                todoTitle={item.text}
                id={item.id}
            />
        </div>
    )
}

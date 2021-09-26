import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { TextField } from '@material-ui/core'
import { Modal } from '../../../../../common/components/Modal/Modal.component'
import { EDIT_TODO } from '../../../store/todo.actions'

interface IEditModal {
    todoTitle: string,
    isOpen: boolean,
    onHandleCLose: () => void,
    id: string
}

export const EditModal: React.FC<IEditModal> = ({
    todoTitle,
    isOpen,
    onHandleCLose,
    id
}) => {

    const dispatch = useDispatch()
    const [newTitle, setNewTitle] = useState(todoTitle)

    return (
        <Modal
            isOpen={isOpen}
            title="Edit Todo"
            onHandleCLose={onHandleCLose}
            onHandleSubmit={() => {
                dispatch({type: EDIT_TODO, payload: {id, newTitle }})
                onHandleCLose()
            }}>
            <TextField
                onChange={(e) => setNewTitle(e.target.value)}
                fullWidth
                required
                value={newTitle}
                label="Password"/>
        </Modal>
    )
}

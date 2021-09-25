import React, {useState} from 'react'
import './TodoItem.component.scss'
import {FormControlLabel} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';

export const TodoItem = () => {


    return (
        <div className='todo-item'>
            <FormControlLabel
                control={
                    <Checkbox
                        className='todo-item-text'
                        checked={true}
                        onChange={() => {}}
                        name="B"
                        color="primary"
                    />
                }
                label="Купить хлеб"
            />
            <div className='todo-item-action'>
                <DeleteIcon className='todo-item-action-action'/>
            </div>
        </div>
    )
}

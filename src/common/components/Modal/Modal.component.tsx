import React from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";

interface IDialog {
    title?: string,
    subtitle?: string,
    children?: React.ReactNode,
    onHandleCLose?: () => void,
    onHandleSubmit?: () => void,
    isOpen: boolean
}

export const Modal: React.FC<IDialog> = ({
    title,
    children,
    subtitle,
    onHandleCLose,
    onHandleSubmit,
    isOpen
}) => {
    return (
        <Dialog
            open={isOpen}
            keepMounted
            onClose={onHandleCLose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {subtitle}
                </DialogContentText>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={onHandleCLose} color="primary">
                    No
                </Button>
                <Button onClick={onHandleSubmit} color="primary">
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}

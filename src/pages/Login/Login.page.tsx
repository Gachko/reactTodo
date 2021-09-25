import React, {useState} from 'react'
import './Login.page.scss'
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import { LOGIN_REQUESTED} from "./store/login.actions";
import {
    Switch,
    Route,
    Redirect,
    useHistory
} from 'react-router-dom'

export const LoginPage = () => {

    const [user, setUser] = useState({
        userName: '',
        password: ''
    })

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogin = () => {
        console.log(user)
        dispatch({type: LOGIN_REQUESTED, payload: user.userName})
        history.push('/')
    }

    return (
        <div className='login-page'>
            <Paper>
                <div className='login-page-content'>
                    <div className='login-page-header'>
                        <AccountCircleIcon
                            color="primary"
                            fontSize="large"
                        />
                    </div>
                    <form className='login-page-body'>
                        <TextField
                            onChange={(e) => setUser({
                                ...user,
                                userName: e.target.value
                            })}
                            className='login-page-body-input'
                            fullWidth
                            required
                            label="Username"
                             />
                        <TextField
                            onChange={(e) => setUser({
                                ...user,
                                password: e.target.value
                            })}
                            className='login-page-body-input'
                            fullWidth
                            required
                            label="Password"
                            type="password"/>
                    </form>
                    <div className='login-page-footer'>
                        <Button
                            disabled={user.userName.trim().length === 0 && user.password.trim().length === 0}
                            onClick = {handleLogin}
                            variant="contained" color="primary">
                            Log in
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

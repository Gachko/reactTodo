import React from 'react'
import './Header.component.scss'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/reducer";
import {LOGIN_REQUESTED, LOGOUT_REQUESTED} from "../../../pages/Login/store/login.actions";

export const Header = () => {

    const userName = useSelector((state: RootState) => state.LoginReducer.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch({type: LOGOUT_REQUESTED})
        //history.push('/')
    }

    return (
        <div className='header'>
            <div className="header-content">
                <div className="header-logo">
                    YTodo
                </div>
                <div className="header-logout">
                    <span>{userName}</span>
                    <ExitToAppIcon
                        onClick={handleLogout}
                        className="header-logout-icon"
                        htmlColor='#fff' fontSize={"large"}/>
                </div>
            </div>
        </div>
    )
}

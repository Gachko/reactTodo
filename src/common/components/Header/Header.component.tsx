import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import './Header.component.scss'
import {RootState} from '../../../store/reducer'
import { LOGOUT_REQUESTED } from '../../../pages/Login/store/login.actions'

export const Header = () => {

    const dispatch = useDispatch()
    const userName = useSelector((state: RootState) => state.LoginReducer.user)

    const handleLogout = () => dispatch({type: LOGOUT_REQUESTED})

    return (
        <div className="header">
            <div className="header-content">
                <div className="header-logo">
                    YTodo
                </div>
                <div className="header-logout">
                    <span>{userName}</span>
                    <ExitToAppIcon
                        onClick={handleLogout}
                        className="header-logout-icon"
                        htmlColor="#fff"
                        fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

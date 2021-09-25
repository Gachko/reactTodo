import { spawn } from 'redux-saga/effects'
import LoginSaga from "../pages/Login/store/login.saga";

export function* rootSaga () {
   yield spawn(LoginSaga)
}

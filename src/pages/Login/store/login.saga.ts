import { call, put, takeEvery } from 'redux-saga/effects'
import {loginUser, logoutUser} from "./login.api";
import {LOGIN, LOGIN_REQUESTED, LOGOUT, LOGOUT_REQUESTED} from "./login.actions";

function* logout() {
    yield call(logoutUser)
    yield put({type: LOGOUT})
}

function* login({ payload }: ReturnType<any>) {
    console.log(1)
    yield call(loginUser, payload)
    yield put({type: LOGIN, payload: payload})
}

export default function * LoginSaga () {
    yield takeEvery(LOGIN_REQUESTED, login)
    yield takeEvery(LOGOUT_REQUESTED, logout)
}

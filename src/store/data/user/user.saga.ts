import UserActionType, { userLoginActionSuccess, UserLoginActionInit } from "./user.actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { login } from "../../repositories/user/UserRepository";

function* requestUser(action: UserLoginActionInit){
    try{
        const email = yield call(login, action.payload);
        if(email){
            yield put(userLoginActionSuccess(email));
        }
    }catch(error){
        console.log(error);
    }
}

export default function* userSaga() {
    yield takeLatest(UserActionType.USER_LOGIN_ACTION_INIT, requestUser);
}

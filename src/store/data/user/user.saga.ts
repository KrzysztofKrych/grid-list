import UserActionType, { userLoginActionSuccess, UserLoginActionInitModel } from "./user.actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { login } from "../../repositories/UserRepository";

function* requestUser(action: UserLoginActionInitModel){
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

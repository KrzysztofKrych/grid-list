import UserActionType, { UserLoginActionInit, UserLoginActionSuccess } from "./user.actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUser } from "../../repositories/user/UserRepository";

function* requestUser(action: UserLoginActionInit){
    const user = yield call(getUser, action.payload.data);
    yield put(new UserLoginActionSuccess());
}

export default function* userSaga() {
    yield takeLatest(UserActionType.USER_LOGIN_ACTION_INIT, requestUser);
}

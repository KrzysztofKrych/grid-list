import UserActionType, { userLoginActionSuccess, UserLoginActionInitModel, userLogoutActionSuccess, UserRegisterActionModel, userRegisterActionSuccess, userLoginActionError } from "./user.actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { login, signout, register } from "../../repositories/UserRepository";
import { customersGetListActionInit } from "../customers/customers.actions";

function* requestUser(action: UserLoginActionInitModel){
    try{
        const {email, error} = yield call(login, action.payload);
        if(email || email === ""){
            yield put(userLoginActionSuccess(email));
            yield put(customersGetListActionInit(email));
        }else{
            yield put(userLoginActionError(error))
        }
    }catch(error){
        console.log(error);
    }
}

function* logoutUser(){
    try{
        yield call(signout);
        yield put(userLogoutActionSuccess());
    }catch(error){
        console.log(error);
    }
}

function* registerUser(action: UserRegisterActionModel){
    try{
       const response =  yield call(register, action.payload);
        if(response){
            yield put(userRegisterActionSuccess(action.payload));
        }
    }catch(error){
        console.log(error);
    }
}


export default function* userSaga() {
    yield takeLatest(UserActionType.USER_LOGIN_ACTION_INIT, requestUser);
    yield takeLatest(UserActionType.USER_LOGOUT_ACTION_INIT, logoutUser);
    yield takeLatest(UserActionType.USER_REGISTER_ACTION_INIT, registerUser);
}

import LoginData from "../../../models/LoginData";

enum UserActionType {
    USER_LOGIN_ACTION_INIT = "USER_LOGIN_ACTION_INIT",
    USER_LOGIN_ACTION_SUCCESS  = "USER_LOGIN_ACTION_SUCCESS",
};

export interface UserLoginActionInitModel {
    type: UserActionType.USER_LOGIN_ACTION_INIT
    payload: LoginData
}

export interface UserLoginActionSuccessModel {
    type: UserActionType.USER_LOGIN_ACTION_SUCCESS
    payload: string
}


export const userLoginActionInit = (data: LoginData): UserLoginActionInitModel => {
    return {
        type: UserActionType.USER_LOGIN_ACTION_INIT,
        payload: data
    }
};

export const userLoginActionSuccess = (email: string): UserLoginActionSuccessModel => {
    return {
        type:  UserActionType.USER_LOGIN_ACTION_SUCCESS,
        payload: email
    }
};

export default UserActionType;


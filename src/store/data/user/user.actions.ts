import LoginData from "../../../models/LoginData";

enum UserActionType {
    USER_LOGIN_ACTION_INIT = "USER_LOGIN_ACTION_INIT",
    USER_LOGIN_ACTION_SUCCESS  = "USER_LOGIN_ACTION_SUCCESS",
    USER_LOGOUT_ACTION_INIT = "USER_LOGOUT_ACTION_INIT",
    USER_LOGOUT_ACTION_SUCCESS  = "USER_LOGOUT_ACTION_SUCCESS",
    USER_REGISTER_ACTION_INIT = "USER_REGISTER_ACTION_INIT",
    USER_REGISTER_ACTION_SUCCESS = "USER_REGISTER_ACTION_SUCCESS",
    USER_LOGIN_ACTION_ERROR = "USER_LOGIN_ACTION_ERROR",
    USER_REGISTER_ACTION_ERROR = "USER_REGISTER_ACTION_ERROR",
    USER_DELETE_LOGIN_ERROR_MESSAGE_ACTION = "USER_DELETE_LOGIN_ERROR_MESSAGE_ACTION",
    USER_DELETE_REGISTER_ERROR_MESSAGE_ACTION = "USER_DELETE_REGISTER_ERROR_MESSAGE_ACTION"
};

export interface UserLoginActionInitModel {
    type: UserActionType.USER_LOGIN_ACTION_INIT
    payload: LoginData
};

export interface UserLoginActionSuccessModel {
    type: UserActionType.USER_LOGIN_ACTION_SUCCESS
    payload: string
};

export interface UserLoginActionErrorModel {
    type: UserActionType.USER_LOGIN_ACTION_ERROR;
    payload: string
};

export interface UserRegisterActionErrorModel {
    type: UserActionType.USER_REGISTER_ACTION_ERROR;
    payload: string
};

export interface UserLogoutActionModel {
    type: UserActionType.USER_LOGOUT_ACTION_INIT | UserActionType.USER_LOGOUT_ACTION_SUCCESS
};

export interface UserRegisterActionModel {
    type: UserActionType.USER_REGISTER_ACTION_INIT | UserActionType.USER_REGISTER_ACTION_SUCCESS
    payload: LoginData
};

export interface UserDeleteLoginErrorMessageActionModel {
    type: UserActionType.USER_DELETE_LOGIN_ERROR_MESSAGE_ACTION
}

export interface UserDeleteRegisterErrorMessageActionModel {
    type: UserActionType.USER_DELETE_REGISTER_ERROR_MESSAGE_ACTION
}



export const userLoginActionInit = (data: LoginData): UserLoginActionInitModel => {
    return {
        type: UserActionType.USER_LOGIN_ACTION_INIT,
        payload: data
    };
};

export const userLoginActionSuccess = (email: string): UserLoginActionSuccessModel => {
    return {
        type:  UserActionType.USER_LOGIN_ACTION_SUCCESS,
        payload: email
    };
};


export const userLoginActionError = (error: string): UserLoginActionErrorModel => {
    return {
        type:  UserActionType.USER_LOGIN_ACTION_ERROR,
        payload: error
    };
};

export const userRegisterActionError = (error: string): UserRegisterActionErrorModel => {
    return {
        type:  UserActionType.USER_REGISTER_ACTION_ERROR,
        payload: error
    };
};

export const userLogoutActionInit = (): UserLogoutActionModel => {
    return {
        type:  UserActionType.USER_LOGOUT_ACTION_INIT,
    }
};

export const userLogoutActionSuccess = (): UserLogoutActionModel => {
    return {
        type:  UserActionType.USER_LOGOUT_ACTION_SUCCESS,
    }
};

export const userRegisterActionInit = (data: LoginData): UserRegisterActionModel => {
    return {
        type: UserActionType.USER_REGISTER_ACTION_INIT,
        payload: data
    };
};

export const userRegisterActionSuccess = (data: LoginData): UserRegisterActionModel => {
    return {
        type: UserActionType.USER_REGISTER_ACTION_SUCCESS,
        payload: data
    };
};

export const userDeleteLoginErrorMessageAction = (): UserDeleteLoginErrorMessageActionModel => {
    return {
        type: UserActionType.USER_DELETE_LOGIN_ERROR_MESSAGE_ACTION,
    };
};

export const userDeleteRegisterErrorMessageAction = (): UserDeleteRegisterErrorMessageActionModel => {
    return {
        type: UserActionType.USER_DELETE_REGISTER_ERROR_MESSAGE_ACTION,
    };
};

export default UserActionType;


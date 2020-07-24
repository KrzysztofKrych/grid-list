import Redux from "redux";
import User from "../../../models/User";
import UserActionType, { UserLoginActionSuccessModel,UserRegisterActionErrorModel, UserLoginActionInitModel, UserLogoutActionModel, UserRegisterActionModel, UserLoginActionErrorModel, UserDeleteLoginErrorMessageActionModel, UserDeleteRegisterErrorMessageActionModel } from "./user.actions";

export enum loginState {
    LOGGEDIN = "LOGGEDIN",
    WORKING = "WORKING",
    LOGGEDOUT = "LOGGEDOUT"
}

export interface UserState extends User {
    loginErrorMessage: string;
    registerErrorMessage: string;
}

export const initialUserState: UserState = {
    isLoggedIn: loginState.WORKING,
    email: "",
    loginErrorMessage: "",
    registerErrorMessage: ""
};

export type UserAction = |
UserLoginActionInitModel | 
UserLoginActionSuccessModel |
UserLogoutActionModel | 
UserRegisterActionModel | 
UserLoginActionErrorModel |
UserDeleteLoginErrorMessageActionModel |
UserDeleteRegisterErrorMessageActionModel |
UserRegisterActionErrorModel;

const userReducer: Redux.Reducer<UserState, UserAction> = (state = initialUserState, action: UserAction) => {
    switch(action.type){
        case UserActionType.USER_LOGIN_ACTION_SUCCESS: {
            return {
                ...state,
                email: action.payload,
                isLoggedIn: loginState.LOGGEDIN,
                loginErrorMessage: ""
            };
        }
        case UserActionType.USER_LOGOUT_ACTION_SUCCESS: {
            return {
                ...state,
                isLoggedIn: loginState.LOGGEDOUT
            };
        }
        case UserActionType.USER_REGISTER_ACTION_SUCCESS: {
            return {
                ...state,
                email: action.payload.email,
                isLoggedIn: loginState.LOGGEDIN,
                loginErrorMessage: ""
            };
        }
        case UserActionType.USER_LOGIN_ACTION_ERROR: {
            return {
                ...state,
                loginErrorMessage: action.payload
            };
        }
        case UserActionType.USER_REGISTER_ACTION_ERROR: {
            return {
                ...state,
                registerErrorMessage: action.payload
            };
        }
        case UserActionType.USER_DELETE_LOGIN_ERROR_MESSAGE_ACTION: {
            return {
                ...state,
                loginErrorMessage: ""
            };
        }
        case UserActionType.USER_DELETE_REGISTER_ERROR_MESSAGE_ACTION: {
            return {
                ...state,
                registerErrorMessage: ""
            };
        }
        default: return state;
    };
};
export default userReducer;


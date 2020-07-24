import Redux from "redux";
import User from "../../../models/User";
import UserActionType, { UserLoginActionSuccessModel, UserLoginActionInitModel, UserLogoutActionModel, UserRegisterActionModel, UserLoginActionErrorModel, UserDeleteErrorMessageActionModel } from "./user.actions";

export enum loginState {
    LOGGEDIN = "LOGGEDIN",
    WORKING = "WORKING",
    LOGGEDOUT = "LOGGEDOUT"
}

export interface UserState extends User {
    loginErrorMessage: string;
}

export const initialUserState: UserState = {
    isLoggedIn: loginState.WORKING,
    email: "",
    loginErrorMessage: ""
};

export type UserAction = |
UserLoginActionInitModel | 
UserLoginActionSuccessModel |
UserLogoutActionModel | 
UserRegisterActionModel | 
UserLoginActionErrorModel |
UserDeleteErrorMessageActionModel;

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
        case UserActionType.USER_DELETE_ERROR_MESSAGE_ACTION: {
            return {
                ...state,
                loginErrorMessage: ""
            };
        }
        default: return state;
    };
};
export default userReducer;


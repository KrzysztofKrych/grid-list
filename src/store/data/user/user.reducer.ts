import Redux from "redux";
import User from "../../../models/User";
import UserActionType, { UserLoginActionSuccessModel, UserLoginActionInitModel, UserLogoutActionSuccessModel } from "./user.actions";

export enum loginState {
    LOGGEDIN = "LOGGEDIN",
    WORKING = "WORKING",
    LOGGEDOUT = "LOGGEDOUT"
}

export const initialUserState: User = {
    isLoggedIn: loginState.WORKING,
    email: ""
};

export type UserAction = |
UserLoginActionInitModel | 
UserLoginActionSuccessModel |
UserLogoutActionSuccessModel;

const userReducer: Redux.Reducer<User, UserAction> = (state = initialUserState, action: UserAction) => {
    switch(action.type){
        case UserActionType.USER_LOGIN_ACTION_SUCCESS: {
            return {
                ...state,
                email: action.payload,
                isLoggedIn: loginState.LOGGEDIN
            };
        }
        case UserActionType.USER_LOGOUT_ACTION_SUCCESS: {
            return {
                ...state,
                isLoggedIn: loginState.LOGGEDOUT
            };
        }
        default: return state;
    };
};
export default userReducer;


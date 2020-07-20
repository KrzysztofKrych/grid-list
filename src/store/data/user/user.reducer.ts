import Redux from "redux";
import User from "../../../models/User";
import UserActionType, { UserLoginActionSuccessModel } from "./user.actions";

export const initialUserState: User = {
    isLoggedIn: false,
    email: ""
};

export type UserAction = UserLoginActionSuccessModel;

const userReducer: Redux.Reducer<User, UserAction> = (state = initialUserState, action: UserAction) => {
    switch(action.type){
        case UserActionType.USER_LOGIN_ACTION_SUCCESS:{
            return {
                ...state,
                email: action.payload,
                isLoggedIn: true
            };
        }
        default: return state;
    };
};
export default userReducer;


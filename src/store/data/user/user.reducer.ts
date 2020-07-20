import Redux from "redux";
import User from "../../../models/User";
import UserActionType, { UserLoginActionSuccess } from "./user.actions";

export const initialUserState: User = {
    login: false,
    name: ""
};

export type UserAction = UserLoginActionSuccess;

const userReducer: Redux.Reducer<User, UserAction> = (state = initialUserState, action: UserAction) => {
    switch(action.type){
        case UserActionType.USER_LOGIN_ACTION_SUCCESS:{
            console.log(action)
            return state;
        }
        default: return state;
    };
};
export default userReducer;


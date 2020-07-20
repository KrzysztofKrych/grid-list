import Redux from "redux";
import LoginData from "../../../models/LoginData";

enum UserActionType {
    USER_LOGIN_ACTION_INIT = "USER_LOGIN_ACTION_INIT",
    USER_LOGIN_ACTION_SUCCESS  = "USER_LOGIN_ACTION_SUCCESS"
};


export class UserLoginActionInit implements Redux.Action {
    public readonly type = UserActionType.USER_LOGIN_ACTION_INIT;
    public readonly payload: { data: LoginData };

    public constructor(data: LoginData) {
        this.payload = { data };
    }
};

export class UserLoginActionSuccess implements Redux.Action {
    public readonly type = UserActionType.USER_LOGIN_ACTION_SUCCESS;
};

export default UserActionType;


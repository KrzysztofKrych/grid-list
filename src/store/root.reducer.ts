
import Redux from "redux";
import User from "../models/User";
import userReducer, { initialUserState, UserAction } from "./data/user/user.reducer";

export interface RootState {
    user: User;
};

export type RootAction = UserAction;

export const rootInitialState: RootState = {
    user: initialUserState
};

const rootReducer: Redux.Reducer<RootState, any> = (state = rootInitialState, action) => {
    return {
        user: userReducer(state.user, action as UserAction),
    };
};

export default rootReducer;

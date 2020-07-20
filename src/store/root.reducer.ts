
import Redux from "redux";
import User from "../models/User";
import userReducer, { initialUserState, UserAction } from "./data/user/user.reducer";
import customersReducer, { CustomersState, initialCustomersState, CustomersAction } from "./data/customers/customers.reducer";

export interface RootState {
    user: User;
    customers: CustomersState;
};

export type RootAction = UserAction;

export const rootInitialState: RootState = {
    user: initialUserState,
    customers: initialCustomersState
};

const rootReducer: Redux.Reducer<RootState, any> = (state = rootInitialState, action) => {
    return {
        user: userReducer(state.user, action as UserAction),
        customers: customersReducer(state.customers, action as CustomersAction)
    };
};

export default rootReducer;

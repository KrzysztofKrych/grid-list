import Redux from "redux";
import Customer from "../../../models/Customer";
import CustomersActionType, { CustomersGetListActionSuccessModel } from "./customers.actions";

export interface CustomersState {
    model: Customer[]
}

export const initialCustomersState: CustomersState = {
    model: []
};

export type CustomersAction = CustomersGetListActionSuccessModel;

const customersReducer: Redux.Reducer<CustomersState, CustomersAction> = (state = initialCustomersState, action: CustomersAction) => {
    switch(action.type){
        case CustomersActionType.CUSTOMERS_GET_LIST_ACTION_SUCCESS: {
            return {
                ...state,
                model: [...action.payload]
            };
        };
        default: return state;
    };
};
export default customersReducer;


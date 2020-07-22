import Redux from "redux";
import Customer from "../../../models/Customer";
import CustomersActionType, { CustomersGetListActionSuccessModel, CustomersDeleteModel } from "./customers.actions";

export interface CustomersState {
    model: Customer[];
}

export const initialCustomersState: CustomersState = {
    model: []
};

export type CustomersAction = CustomersGetListActionSuccessModel | CustomersDeleteModel;

const customersReducer: Redux.Reducer<CustomersState, CustomersAction> = (state = initialCustomersState, action: CustomersAction) => {
    switch(action.type){
        case CustomersActionType.CUSTOMERS_GET_LIST_ACTION_SUCCESS: {
            return {
                ...state,
                model: [...action.payload]
            };
        };
        case CustomersActionType.CUSTOMERS_DELETE_ACTION_SUCCESS: {
            return {
                ...state,
                model: [...state.model.filter(customer => customer.id !== action.payload)]
            };
        }
        default: return state;
    };
};
export default customersReducer;


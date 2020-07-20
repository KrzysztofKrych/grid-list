import Customer from "../../../models/Customer";

enum CustomersActionType {
    CUSTOMERS_GET_LIST_ACTION_INIT  = "CUSTOMERS_GET_LIST_ACTION_INIT",
    CUSTOMERS_GET_LIST_ACTION_SUCCESS  = "CUSTOMERS_GET_LIST_ACTION_SUCCESS",
};
    
export interface CustomersGetListActionInitModel {
    type: CustomersActionType.CUSTOMERS_GET_LIST_ACTION_INIT
    payload: string
}

export interface CustomersGetListActionSuccessModel {
    type: CustomersActionType.CUSTOMERS_GET_LIST_ACTION_SUCCESS
    payload: Customer[]
}


export const customersGetListActionInit = (email: string): CustomersGetListActionInitModel => {
    return {
        type:  CustomersActionType.CUSTOMERS_GET_LIST_ACTION_INIT,
        payload: email
    }
};

export const customersGetListActionSuccess = (list: Customer[]): CustomersGetListActionSuccessModel => {
    return {
        type:  CustomersActionType.CUSTOMERS_GET_LIST_ACTION_SUCCESS,
        payload: list
    }
};

export default CustomersActionType;
import CustomersActionType, { CustomersGetListActionInitModel, customersGetListActionSuccess, CustomersDeleteModel, customersDeleteActionSuccess } from "./customers.actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { getList, requestDeleteCustomer } from "../../repositories/CustomersRepository";

function* requestList(action: CustomersGetListActionInitModel){
    try{
        const list = yield call(getList, action.payload);
        if(list){
            yield put(customersGetListActionSuccess(list));
        }
    }catch(error){
        console.log(error);
    };
}

function* deleteCustomer(action: CustomersDeleteModel){
    try{
        const isDeleted = yield call(requestDeleteCustomer, action.payload);
        if(isDeleted){
            yield put(customersDeleteActionSuccess(action.payload));
        }
    }catch(error){
        console.log(error);
    };
}


export default function* customersSaga() {
    yield takeLatest(CustomersActionType.CUSTOMERS_GET_LIST_ACTION_INIT, requestList);
    yield takeLatest(CustomersActionType.CUSTOMERS_DELETE_ACTION_INIT, deleteCustomer);
}

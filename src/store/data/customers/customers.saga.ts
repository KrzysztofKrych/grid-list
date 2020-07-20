import CustomersActionType, { CustomersGetListActionInitModel, customersGetListActionSuccess } from "./customers.actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { getList } from "../../repositories/CustomersRepository";

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

export default function* customersSaga() {
    yield takeLatest(CustomersActionType.CUSTOMERS_GET_LIST_ACTION_INIT, requestList);
}

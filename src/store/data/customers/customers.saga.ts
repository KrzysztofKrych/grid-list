import CustomersActionType, { CustomersGetListActionInitModel, customersGetListActionSuccess, CustomersDeleteModel, customersDeleteActionSuccess, CustomersAddModel, customersAddActionSuccess, CustomersUpdateModel, customersUpdateActionSuccess } from "./customers.actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { getList, requestDeleteCustomer, requestAddCustomer, requestUpdateCustomer } from "../../repositories/CustomersRepository";

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

function* addCustomer(action: CustomersAddModel){
    try{
        const id = yield call(requestAddCustomer, action.payload);
        if(id){
            yield put(customersAddActionSuccess({...action.payload, id}));
        }
    }catch(error){
        console.log(error);
    };
}

function* updateCustomer<T>(action: CustomersUpdateModel){
    try{
        const {id, body} = action.payload;
        const response = yield call(requestUpdateCustomer, id, body);
        if(response){
            yield put(customersUpdateActionSuccess(id, body));
        }
    }catch(error){
        console.log(error);
    };
}


export default function* customersSaga() {
    yield takeLatest(CustomersActionType.CUSTOMERS_GET_LIST_ACTION_INIT, requestList);
    yield takeLatest(CustomersActionType.CUSTOMERS_DELETE_ACTION_INIT, deleteCustomer);
    yield takeLatest(CustomersActionType.CUSTOMERS_ADD_ACTION_INIT, addCustomer);
    yield takeLatest(CustomersActionType.CUSTOMERS_UPDATE_ACTION_INIT, updateCustomer);
}

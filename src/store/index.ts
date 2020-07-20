import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root.reducer";
import userSaga from "./data/user/user.saga";
import customersSaga from "./data/customers/customers.saga";
const sagaMiddleware = createSagaMiddleware();

export default createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(userSaga)
sagaMiddleware.run(customersSaga)

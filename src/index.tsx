import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store  from "./store/index";
import { fire } from './api/firebaseConfig';
import { userLoginActionSuccess } from './store/data/user/user.actions';
import { customersGetListActionInit } from './store/data/customers/customers.actions';

const loginCallback = async (user: firebase.User | null) => {
  if(user && user.email){
    store.dispatch(userLoginActionSuccess(user.email));
    store.dispatch(customersGetListActionInit(user.email));
  }
}
fire.auth().onAuthStateChanged(loginCallback);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

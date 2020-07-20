import React, { useState } from "react";
import LoginData from "../../models/LoginData";
import { Dispatch } from "redux";
import { userLoginActionInit } from "../../store/data/user/user.actions";
import { connect } from "react-redux";

export interface Props{
    login: (loginData: LoginData) => void;
}

const Login = ({login}: Props) => {
    const [loginData, setLoginData] = useState<LoginData>({email: "", password: ""});
    const handleChangeLoginData = (setter: (loginData: LoginData) => void) => {
        setter(loginData);
        setLoginData({...loginData});
    }
    const handleClick = () => {
        login(loginData);
    }
    return (
        <div>
            <input 
                onBlur={event => handleChangeLoginData(loginData => loginData.email = event.target.value)} />
            <input
                onBlur={event => handleChangeLoginData(loginData => loginData.password = event.target.value)} />
            <button onClick={handleClick}>Save</button>
        </div>
    );
};

const map = {
    dispatch: (dispatch: Dispatch) => {
        return {
            login: (loginData: LoginData) => {
                dispatch(userLoginActionInit(loginData));
            },
        };
    }
}

const connected = connect(undefined, map.dispatch);

export default connected(Login);
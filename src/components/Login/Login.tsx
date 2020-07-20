import React, { useState } from "react";
import LoginData from "../../models/LoginData";
import { Dispatch } from "redux";
import { userLoginActionInit } from "../../store/data/user/user.actions";
import { connect } from "react-redux";
import { RootState } from "../../store/root.reducer";

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
    state: (state: RootState) => {
        return {
            user: state.user
        };
    },
    dispatch: (dispatch: Dispatch) => {
        return {
            login: (loginData: LoginData) => {
                dispatch(userLoginActionInit(loginData));
            },
        };
    }
}

const connected = connect(map.state, map.dispatch);

export default connected(Login);
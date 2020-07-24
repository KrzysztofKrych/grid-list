import React, { useState } from "react";
import { StyledLoginContainer } from "../Login/Login";
import Button from "../ui-components/Button/Button";
import LoginData from "../../models/LoginData";
import Input from "../ui-components/Input/Input";
import { userRegisterActionInit } from "../../store/data/user/user.actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export interface Props {
    onCancel: () => void;
    register: (data: LoginData) => void;
}

const Register = ({onCancel, register}: Props) => {
    const [registerData, setRegisterData] = useState<LoginData>({email: "", password: ""});

    const handleChangeRegisterData = (setter: (registerData: LoginData) => void) => {
        setter(registerData);
        setRegisterData({...registerData});
    };

    const handleRegister = () => {
        register(registerData);
    }

    return (
        <StyledLoginContainer>
            
            <Input 
                placeholder="Login"
                onChange={event => handleChangeRegisterData(registerData => registerData.email = event.target.value)} />
            <Input
                placeholder="Password"
                type="password"
                onChange={event => handleChangeRegisterData(registerData => registerData.password = event.target.value)} />
                <Button onClick={handleRegister}>Save</Button>
            <Button onClick={onCancel} variant="danger">Cancel</Button>
        </StyledLoginContainer>
    );
};

const map = {
    dispatch: (dispatch: Dispatch) => {
        return {
            register: (loginData: LoginData) => {
                dispatch(userRegisterActionInit(loginData));
            },
        };
    }
};

const connected = connect(undefined, map.dispatch);
export default connected(Register);
import React, { useState } from "react";
import { StyledLoginContainer, StyledErrorDiv } from "../Login/Login";
import Button from "../ui-components/Button/Button";
import LoginData from "../../models/LoginData";
import Input from "../ui-components/Input/Input";
import { userRegisterActionInit, userDeleteRegisterErrorMessageAction } from "../../store/data/user/user.actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../store/root.reducer";
import { UserState } from "../../store/data/user/user.reducer";

export interface Props {
    user: UserState;
    onCancel: () => void;
    register: (data: LoginData) => void;
    deleteRegisterErrorMessage: () => void;
}

const Register = ({user, onCancel, register, deleteRegisterErrorMessage}: Props) => {
    const [registerData, setRegisterData] = useState<LoginData>({email: "", password: ""});

    const handleChangeRegisterData = (setter: (registerData: LoginData) => void) => {
        setter(registerData);
        setRegisterData({...registerData});
    };

    const handleRegister = () => {
        register(registerData);
    }

    const handleCancel = () => {
        deleteRegisterErrorMessage();
        onCancel();
    }

    return (
        <StyledLoginContainer>
            <StyledErrorDiv>{user.registerErrorMessage}</StyledErrorDiv>
            <Input 
                placeholder="Email"
                onFocus={deleteRegisterErrorMessage}
                onChange={event => handleChangeRegisterData(registerData => registerData.email = event.target.value)} />
            <Input
                placeholder="Password"
                type="password"
                onFocus={deleteRegisterErrorMessage}
                onChange={event => handleChangeRegisterData(registerData => registerData.password = event.target.value)} />
                <Button disabled={!registerData.email || !registerData.password} onClick={handleRegister}>Create Account</Button>
            <Button onClick={handleCancel} variant="danger">Cancel</Button>
        </StyledLoginContainer>
    );
};

const map = {
    state: (state: RootState) => {
        return {
            user: state.user
        }
    },
    dispatch: (dispatch: Dispatch) => {
        return {
            register: (loginData: LoginData) => {
                dispatch(userRegisterActionInit(loginData));
            },
            deleteRegisterErrorMessage : () => {
                dispatch(userDeleteRegisterErrorMessageAction());
            }
        };
    }
};

const connected = connect(map.state, map.dispatch);
export default connected(Register);
import React, { useState, Fragment } from "react";
import LoginData from "../../models/LoginData";
import { Dispatch } from "redux";
import { userLoginActionInit, userDeleteLoginErrorMessageAction } from "../../store/data/user/user.actions";
import { connect } from "react-redux";
import Input from "../ui-components/Input/Input";
import Button from "../ui-components/Button/Button";
import styled from "styled-components";
import Register from "../Register/Register";
import { RootState } from "../../store/root.reducer";
import { UserState } from "../../store/data/user/user.reducer";

export interface Props{
    login: (loginData: LoginData) => void;
    deleteLoginErrorMessage: () => void;
    user: UserState;
};

export const StyledLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    height: 80vh;
    > * {
        margin-top: .5rem
    }
`;

export const StyledErrorDiv = styled.div`
        color: var(--danger);
`;

const StyledColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    > * {
        margin-bottom: .5rem;
    }
`;

const Login = ({login, deleteLoginErrorMessage, user}: Props) => {
    const [loginData, setLoginData] = useState<LoginData>({email: "", password: ""});
    const [showRegister, setShowRegister] = useState<boolean>(false);
    
    const handleChangeLoginData = (setter: (loginData: LoginData) => void) => {
        setter(loginData);
        setLoginData({...loginData});;
    }

    const handleLogin = () => {
        login(loginData);
    };

    const handleShowRegister = () => {
        deleteLoginErrorMessage();
        setShowRegister(true);
    }

    return (
        <Fragment>
            {!showRegister && <StyledLoginContainer>
                <StyledErrorDiv>{user.loginErrorMessage}</StyledErrorDiv>
                <Input 
                    placeholder="Login"
                    onFocus={deleteLoginErrorMessage}
                    onChange={event => handleChangeLoginData(loginData => loginData.email = event.target.value)} />
                <Input
                    placeholder="Password"
                    onFocus={deleteLoginErrorMessage}
                    type="password"
                    onChange={event => handleChangeLoginData(loginData => loginData.password = event.target.value)} />
                <StyledColumnDiv>
                    <Button onClick={handleLogin} disabled={!loginData.email || !loginData.password}>Login</Button>
                    <Button variant="info" onClick={handleShowRegister}>Create New Account</Button>    
                </StyledColumnDiv>
            </StyledLoginContainer>}
            {showRegister && <Register onCancel={() => setShowRegister(false)} />}
        </Fragment>
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
            login: (loginData: LoginData) => {
                dispatch(userLoginActionInit(loginData));
            },
            deleteLoginErrorMessage : () => {
                dispatch(userDeleteLoginErrorMessageAction());
            }
        };
    }
};

const connected = connect(map.state, map.dispatch);

export default connected(Login);
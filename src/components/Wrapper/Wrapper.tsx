import React, { Fragment } from 'react';
import Login from '../Login/Login';
import { RootState } from '../../store/root.reducer';
import { connect } from 'react-redux';
import User from '../../models/User';
import Main from '../Main/Main';
import { loginState } from '../../store/data/user/user.reducer';
import Spinner from '../ui-components/Spinner/Spinner';
import styled from 'styled-components';

export interface Props{
    user: User;
};

const Wrapper = ({ user }: Props) => {
    const SpinnerContainer = styled.div`
        top: calc(50% - 80px);
        left: calc(50% - 80px);
        position: fixed;
    `;
    return (
        <Fragment>
            {user.isLoggedIn === loginState.LOGGEDOUT && <Login />}
            {user.isLoggedIn === loginState.LOGGEDIN && <Main />}
            {user.isLoggedIn === loginState.WORKING && <SpinnerContainer><Spinner /></SpinnerContainer>}
        </Fragment>
    );
};

const map = {
    state: (state: RootState) => {
        return {
            user: state.user
        };
    }
};

const connected = connect(map.state);


export default connected(Wrapper);
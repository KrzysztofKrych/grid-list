import React, { Fragment } from 'react';
import Login from '../Login/Login';
import { RootState } from '../../store/root.reducer';
import { connect } from 'react-redux';
import User from '../../models/User';
import Main from '../Main/Main';

export interface Props{
    user: User;
}

const Wrapper = ({ user }: Props) => {
    return (
        <Fragment>
            {!user.isLoggedIn && <Login />}
            {user.isLoggedIn && <Main />}
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
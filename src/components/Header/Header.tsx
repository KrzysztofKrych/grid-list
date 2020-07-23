import React from "react";
import styled from "styled-components";
import { RootState } from "../../store/root.reducer";
import { connect } from "react-redux";
import User from "../../models/User";
import Button from "../ui-components/Button/Button";
import { Dispatch } from "redux";
import { userLogoutActionInit } from "../../store/data/user/user.actions";

export interface Props{
    user: User;
    signout: () => void;
}

export const StyledHeader = styled.div`
    background: var(--primary);
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;`;

const Header = ({user, signout}: Props) => (
    <StyledHeader>
        <Button variant="info" onClick={signout}>Sign out</Button>
        Logged as {user.email}
    </StyledHeader>
);

const map = {
    state: (state: RootState) => {
        return {
            user: state.user
        };
    },
    dispatch: (dispatch: Dispatch) => ({
        signout: () => {
            dispatch(userLogoutActionInit());
        }
    })
};

const connected = connect(map.state, map.dispatch);

export default connected(Header);
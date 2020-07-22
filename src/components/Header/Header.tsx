import React from "react";
import styled from "styled-components";
import { RootState } from "../../store/root.reducer";
import { connect } from "react-redux";
import User from "../../models/User";

export interface Props{
    user: User;
}

export const StyledHeader = styled.div`
    background: var(--primary);
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;`;
const Header = ({user}: Props) => (
    <StyledHeader>Logged as {user.email}</StyledHeader>
);

const map = {
    state: (state: RootState) => {
        return {
            user: state.user
        };
    }
};

const connected = connect(map.state);

export default connected(Header);
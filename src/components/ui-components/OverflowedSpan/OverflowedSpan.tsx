import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export interface Props{
    children?: ReactNode | ReactElement;
    onClick?: (event: unknown) => void 
}

export const OverflowedSpan = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    padding: .5rem;
    background: white;
    :hover{
        box-shadow: 0px 0px 5px rgba(128, 128, 128, 0.25);
        border-radius: 3px;
        overflow: visible; 
        white-space: normal; 
        width: auto;
        z-index: 101;
    }
`;

export const ContainerOverflowedSpan = (props: Props) => (
    <div style={{width: '100%'}}><OverflowedSpan>{props.children}</OverflowedSpan></div>
);
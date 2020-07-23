import React from "react";
import styled from "styled-components";

export interface Props<T = []> {
    items: T[];
    displayData: (item: T, index: number) => React.ReactNode;
};

const StyledDiv = styled.div`
    margin-top: 1rem;
`;

const List = <T extends object>({items, displayData}: Props<T>) => (
    <div>
        {items && items.length ? items.map(displayData) : <StyledDiv>Customers list is empty.</StyledDiv>}
    </div>
);

export default List;
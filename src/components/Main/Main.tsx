import React, { Fragment, useRef } from "react";
import List from "../List/List";
import { RootState } from "../../store/root.reducer";
import { connect } from "react-redux";
import Customer from "../../models/Customer";
import Grid from "../ui-components/Grid/Grid";

import "./Main.css";
import EditableSpan from "../ui-components/EditableSpan/EditableSpan";
import TooltipContainer from "../ui-components/TooltipContainer/TooltipContainer";

export interface Props {
    customers: Customer[];
}


const Main = ({customers}: Props) => {
    const handleChangeName = (event: React.FocusEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }
    
    const handleDisplayCustomerRow = (customer: Customer, index: number) => {
        return (
            <Grid key={index} className="grid">
                <EditableSpan onBlur={handleChangeName} text={customer.name}/>
                <TooltipContainer onlyOverflowed>{customer.email}</TooltipContainer>
                <div>{customer.phone}</div>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </Grid>
        );
    };
    return (
        <Fragment>
            <Grid className="grid">
                <div>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Actions</div>
            </Grid>
            <List 
                items={customers} 
                displayData={handleDisplayCustomerRow} />
        </Fragment>
    );
};

const map = {
    state: (state: RootState) => {
        return {
            customers: state.customers.model
        };
    }
};

const connected = connect(map.state);

export default connected(Main);
import React, { Fragment, useState } from "react";
import List from "../List/List";
import { RootState } from "../../store/root.reducer";
import { connect } from "react-redux";
import Customer from "../../models/Customer";
import Grid from "../ui-components/Grid/Grid";

import "./Main.css";
import EditableSpan from "../ui-components/EditableSpan/EditableSpan";
import TooltipContainer from "../ui-components/TooltipContainer/TooltipContainer";
import Button from "../ui-components/Button/Button";
import { customersDeleteActionInit } from "../../store/data/customers/customers.actions";
import { Dispatch } from "redux";
import Header from "../Header/Header";
import Input from "../ui-components/Input/Input";

export interface Props {
    customers: Customer[];
    deleteCustomer: (id: string) => void;
}


const Main = ({customers, deleteCustomer}: Props) => {
    const [showAddPanel, setShowAddPanel] = useState<boolean>(false);
    const handleChangeName = (event: React.FocusEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };
    const handleDeleteCustomer = (id: string) => {
        deleteCustomer(id);
    }

    const handleToogleAddPanel = (value: boolean) => {
        setShowAddPanel(value)
    }
    
    const handleDisplayCustomerRow = (customer: Customer, index: number) => {
        return (
            <Grid key={index} className="grid">
                <EditableSpan onBlur={handleChangeName} text={customer.name}/>
                <TooltipContainer onlyOverflowed>{customer.email}</TooltipContainer>
                <div>{customer.phone}</div>
                <div>
                    <Button variant="danger" onClick={() => handleDeleteCustomer(customer.id)}>Delete</Button>
                </div>
            </Grid>
        );
    };
    return (
        <div className="container">
            <Header></Header>
            {!showAddPanel && <div className="add-customer">
                <Button onClick={() => handleToogleAddPanel(true)}>Add new Customer</Button>
            </div>}
            {showAddPanel && <Grid className="grid add-panel">
                <Input placeholder="Type name..." />
                <Input placeholder="Type email..."  />
                <Input placeholder="Type phone..."  />
                <div>
                    <Button variant="info" onClick={() => undefined}>Save</Button>
                    <Button variant="danger" onClick={() => handleToogleAddPanel(false)}>Cancel</Button>
                </div>
            </Grid>}
            <Grid className="grid">
                <div>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Actions</div>
            </Grid>
            <List 
                items={customers} 
                displayData={handleDisplayCustomerRow} />
        </div>
    );
};

const map = {
    state: (state: RootState) => {
        return {
            customers: state.customers.model
        };
    },
    dispatch: (dispatch: Dispatch) => {
        return {
            deleteCustomer: (id: string) => {
                dispatch(customersDeleteActionInit(id));
            },
        };
    }
};

const connected = connect(map.state, map.dispatch);

export default connected(Main);
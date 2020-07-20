import React from "react";
import List from "../List/List";
import { RootState } from "../../store/root.reducer";
import { connect } from "react-redux";
import Customer from "../../models/Customer";

export interface Props {
    customers: Customer[]
}

const Main = ({customers}: Props) => {
    const handleDisplayCustomerRow = (customer: Customer, index: number) => {
        return (
            <div key={index}>{customer.name}</div>
        )
    }
    return (
        <List 
            items={customers} 
            displayData={handleDisplayCustomerRow} />
    )
};

const map = {
    state: (state: RootState) => {
        return {
            customers: state.customers.model
        }
    }
}

const connected = connect(map.state)

export default connected(Main);
import React, { useState, useEffect } from "react";
import List from "../List/List";
import { RootState } from "../../store/root.reducer";
import { connect } from "react-redux";
import Customer from "../../models/Customer";
import Grid from "../ui-components/Grid/Grid";

import "./Main.css";
import EditableSpan from "../ui-components/EditableSpan/EditableSpan";
import TooltipContainer from "../ui-components/TooltipContainer/TooltipContainer";
import Button from "../ui-components/Button/Button";
import { customersDeleteActionInit, customersAddActionInit } from "../../store/data/customers/customers.actions";
import { Dispatch } from "redux";
import Header from "../Header/Header";
import Input from "../ui-components/Input/Input";
import User from "../../models/User";
import { filterCustomersByValue, validators } from "../../helper";

export interface Props {
    customers: Customer[];
    user: User;
    deleteCustomer: (id: string) => void;
    addCustomer: (customer: Customer) => void;
}

const initialValidationErrors = {name: false, email: false};

const Main = ({customers, user, deleteCustomer, addCustomer}: Props) => {
    const [showAddPanel, setShowAddPanel] = useState<boolean>(false);
    const [filtredCustomers, setFiltredCustomers] = useState<Customer[]>(customers);
    const [validCustomer, setValidCustomer] = useState<boolean>(false);
    const [errors, setErrors] = useState({...initialValidationErrors});

    const [newCustomer, setNewCustomer] = useState<Customer>({
        name: "", email: "", phone: "", id: ""+Date.now(), ownerEmail: user.email
    });
    const handleChangeName = (event: React.FocusEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const handleDeleteCustomer = (id: string) => {
        deleteCustomer(id);
    };

    const handleToogleAddPanel = (value: boolean) => {
        setShowAddPanel(value);
        setErrors({...initialValidationErrors});
    };

    const handleAddCustomer = () => {
        if(validators.isValidCustomer(newCustomer.name, newCustomer.email)){
            addCustomer(newCustomer);
            handleToogleAddPanel(false);
        }
    };

    const handleChangeNewCustomer = (setter: (customer: Customer) => void) => {
        setter(newCustomer);
        setNewCustomer({...newCustomer});
        const { name, email } = newCustomer;
        setValidCustomer(validators.isValidCustomer(name, email));
    };

    useEffect(() => {
        setFiltredCustomers(customers);
    }, [customers]);
    
    const handleDisplayCustomerRow = (customer: Customer, index: number) => {
        return (
            <Grid key={index} className="grid">
                <EditableSpan onBlur={handleChangeName} text={customer.name}/>
                <TooltipContainer onlyOverflowed>{customer.email}</TooltipContainer>
                <TooltipContainer onlyOverflowed>{customer.phone}</TooltipContainer>
                <div>
                    <Button variant="danger" onClick={() => handleDeleteCustomer(customer.id)}>Delete</Button>
                </div>
            </Grid>
        );
    };

    const handleFilterCustomers = (value: string) => {
        setFiltredCustomers(filterCustomersByValue(customers, value));
    };

    return (
        <div className="container">
            <Header></Header>
            {!showAddPanel && <div className="add-customer">
                <Input size="large" placeholder="Enter name, email or phone" onChange={event => handleFilterCustomers(event.target.value)} />
                <Button onClick={() => handleToogleAddPanel(true)}>Add new Customer</Button>
            </div>}
            {showAddPanel && <Grid className="grid add-panel">
                <Input 
                    onFocus={() => setErrors({...errors, name: false})}
                    variant={errors.name ? 'danger' : ''}
                    placeholder="Type name..." 
                    onBlur={event => {
                        handleChangeNewCustomer(customer => customer.name = event.target.value);
                        setErrors({
                            ...errors,
                            name: !event.target.value
                        });
                    }}/>
                <Input 
                    onFocus={() => setErrors({...errors, email: false})}
                    variant={errors.email ? 'danger' : ''}
                    placeholder="Type email..."
                    onBlur={event => {
                        handleChangeNewCustomer(customer => customer.email = event.target.value);
                        setErrors({
                            ...errors,
                            email: !validators.isValidEmail(event.target.value)
                        });
                    }}  />
                <Input 
                    placeholder="Type phone..."
                    onBlur={event => handleChangeNewCustomer(customer => customer.phone = event.target.value)} />
                <div className="actions">
                    <Button
                        disabled={!validCustomer}
                        variant="info" 
                        onClick={() => handleAddCustomer()}>Save</Button>
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
                items={filtredCustomers} 
                displayData={handleDisplayCustomerRow} />
        </div>
    );
};

const map = {
    state: (state: RootState) => {
        return {
            customers: state.customers.model,
            user: state.user
        };
    },
    dispatch: (dispatch: Dispatch) => {
        return {
            deleteCustomer: (id: string) => {
                dispatch(customersDeleteActionInit(id));
            },
            addCustomer: (customer: Customer) => {
                dispatch(customersAddActionInit(customer));
            }
        };
    }
};

const connected = connect(map.state, map.dispatch);

export default connected(Main);
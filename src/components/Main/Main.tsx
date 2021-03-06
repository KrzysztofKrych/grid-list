import React, { useState, useEffect } from "react";
import List from "../List/List";
import { RootState } from "../../store/root.reducer";
import { connect } from "react-redux";
import Customer from "../../models/Customer";
import Grid from "../ui-components/Grid/Grid";
import EditableSpan from "../ui-components/EditableSpan/EditableSpan";
import Button from "../ui-components/Button/Button";
import { customersDeleteActionInit, customersAddActionInit, customersUpdateActionInit } from "../../store/data/customers/customers.actions";
import { Dispatch } from "redux";
import Header from "../Header/Header";
import Input from "../ui-components/Input/Input";
import { filterCustomersByValue, validators, sortByStringValue } from "../../helper";
import "./Main.css";
import UpdateConsumerBody from "../../models/UpdateCustomerBody";
import { UserState } from "../../store/data/user/user.reducer";
import styled from "styled-components";

export interface Props {
    customers: Customer[];
    user: UserState;
    deleteCustomer: (id: string) => void;
    addCustomer: (customer: Customer) => void;
    updateCustomer: (id: string, body: UpdateConsumerBody) => void;
};

const OnlyPhoneDiv = styled.div`
    display: block;
    min-width: 50%;
    text-align: left;
    @media(min-width: 672px) {
        display: none;
    }
`

const initialValidationErrors = {name: false, email: false};

const Main = ({customers, user, deleteCustomer, addCustomer, updateCustomer}: Props) => {
    const [showAddPanel, setShowAddPanel] = useState<boolean>(false);
    const [filtredCustomers, setFiltredCustomers] = useState<Customer[]>(customers);
    const [validCustomer, setValidCustomer] = useState<boolean>(false);
    const [errors, setErrors] = useState({...initialValidationErrors});

    const [newCustomer, setNewCustomer] = useState<Customer>({
        name: "", email: "", phone: "", id: ""+Date.now(), ownerEmail: user.email
    });

    const handleChangeName = (event: React.FocusEvent<HTMLInputElement>, id: string) => {
        event.target.value && updateCustomer(id, {name: event.target.value});
    };

    const handleChangeEmail = (event: React.FocusEvent<HTMLInputElement>, id: string) => {
        if(validators.isValidEmail(event.target.value)){
            updateCustomer(id, {email: event.target.value});
        };
    };

    const handleChangePhone = (event: React.FocusEvent<HTMLInputElement>, id: string) => {
        updateCustomer(id, {phone: event.target.value});
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
        };
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

    const handleFilterCustomers = (value: string) => {
        setFiltredCustomers(filterCustomersByValue(customers, value));
    };
        
    const handleDisplayCustomerRow = (customer: Customer, index: number) => {
        return (
            <Grid key={index} className="grid">
                <div className="grid-children">
                    <OnlyPhoneDiv>Name</OnlyPhoneDiv>
                    <EditableSpan 
                    inputClassName="phone-small"
                    variant="editable-span-align-right" 
                    onBlur={event => handleChangeName(event, customer.id)} 
                    text={customer.name}/>
                </div>
                <div className="grid-children">
                    <OnlyPhoneDiv>Email</OnlyPhoneDiv>
                    <EditableSpan 
                    inputClassName="phone-small"
                    variant="editable-span-align-right" 
                    onBlur={event => handleChangeEmail(event, customer.id)} 
                    text={customer.email}></EditableSpan>
                </div>
                <div className="grid-children">
                <OnlyPhoneDiv>Phone</OnlyPhoneDiv>
                    <EditableSpan 
                    inputClassName="phone-small"
                    onBlur={event => handleChangePhone(event, customer.id)} 
                    text={customer.phone || "Click to add phone"}
                    variant={!customer.phone ? 'danger editable-span-align-right':'editable-span-align-right'}
                    disableDefaultText={!customer.phone}></EditableSpan>
                </div>
                
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
            <Grid className="grid table-head">
                <div 
                    onClick={() => 
                    setFiltredCustomers(
                            [...sortByStringValue((customer:Customer) => customer.name, filtredCustomers)]
                        )
                    }>
                    Name
                </div>
                <div 
                    onClick={() => 
                        setFiltredCustomers(
                            [...sortByStringValue((customer:Customer) => customer.email, filtredCustomers)]
                        )
                    }>
                    Email
                </div>
                <div 
                    onClick={() => 
                        setFiltredCustomers(
                            [...sortByStringValue((customer:Customer) => customer.phone, filtredCustomers)]
                        )
                    }>
                    Phone
                </div>
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
            },
            updateCustomer: (id: string, body: UpdateConsumerBody) => {
                dispatch(customersUpdateActionInit(id, body));
            },
        };
    }
};

const connected = connect(map.state, map.dispatch);

export default connected(Main);
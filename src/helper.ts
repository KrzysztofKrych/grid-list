import Customer from "./models/Customer";

export const filterCustomersByValue = (customers: Customer[], value: string) => (
    customers.filter(customer => 
        customer.name.includes(value) || customer.email.includes(value) || customer.phone.includes(value)
    )
);
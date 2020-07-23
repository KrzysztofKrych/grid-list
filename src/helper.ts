import Customer from "./models/Customer";

export const emailRegex = /\S+@\S+\.\S+/;

export const filterCustomersByValue = (customers: Customer[], value: string) => (
    customers.filter(customer => 
        customer.name.includes(value) || customer.email.includes(value) || customer.phone.includes(value)
    )
);

export const validators = {
    isValidEmail: (email: string) => emailRegex.test(email),
    isValidCustomer: (name: string, email: string): boolean => (
        !!name && !!name.length && validators.isValidEmail(email)
    )
}
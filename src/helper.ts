import Customer from "./models/Customer";

export const emailRegex = /\S+@\S+\.\S+/;

export const filterCustomersByValue = (customers: Customer[], value: string) => {
    const LowerCasedValue = value.toLowerCase();
    return (
        customers.filter(customer => 
            customer.name.toLowerCase().includes(LowerCasedValue) || 
            customer.email.toLowerCase().includes(LowerCasedValue) || 
            customer.phone.toLowerCase().includes(LowerCasedValue)
        )
    );
};


export const sortByStringValue = <T>(sorter: (value: T) => string, list: T[]) =>(
    list.sort((a,b) => sorter(a).localeCompare(sorter(b)))
);

export const validators = {
    isValidEmail: (email: string) => emailRegex.test(email),
    isValidCustomer: (name: string, email: string): boolean => (
        !!name && !!name.length && validators.isValidEmail(email)
    )
};
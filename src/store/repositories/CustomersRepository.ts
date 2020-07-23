import { getByQuery, deleteDocument, addDocument, updateDocument } from "../../api/api";
import Customer from "../../models/Customer";
import UpdateConsumerBody from "../../models/UpdateCustomerBody";

export const getList = async (email: string) => await getByQuery('data', 'ownerEmail', email);

export const requestDeleteCustomer = async (id: string) => await deleteDocument('data', id);

export const requestAddCustomer = async (customer: Customer) => await addDocument('data', customer);

export const requestUpdateCustomer = async (id: string, body: UpdateConsumerBody) => await updateDocument('data', id, body);
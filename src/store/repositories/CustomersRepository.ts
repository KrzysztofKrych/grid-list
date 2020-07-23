import { getByQuery, deleteDocument, addDocument } from "../../api/api";
import Customer from "../../models/Customer";

export const getList = async (email: string) => await getByQuery('data', 'ownerEmail', email);

export const requestDeleteCustomer = async (id: string) => await deleteDocument('data', id);

export const requestAddCustomer = async (customer: Customer) => await addDocument('data', customer);
import { getByQuery, deleteDocument } from "../../api/api";

export const getList = async (email: string) => await getByQuery('data', 'ownerEmail', email);

export const requestDeleteCustomer = async (id: string) => await deleteDocument('data', id);
import { getByQuery } from "../../api/api";

export const getList = async (email: string) => await getByQuery('data', 'ownerEmail', email);
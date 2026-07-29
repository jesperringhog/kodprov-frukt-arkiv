import { get } from "./serviceBase";

const BASE_URL = "https://www.fruityvice.com/api/fruit/";

export const getFruits = async () => get(`${BASE_URL}all`);

export const getFruitById = async (id: string) => get(`${BASE_URL}${id}`);

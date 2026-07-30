import { Fruit } from "../types/Fruit";
import { get } from "./serviceBase";

const BASE_URL = "https://www.fruityvice.com/api/fruit/";

export const getFruits = async () => {
  try {
    return await get<Fruit[]>(`${BASE_URL}all`);
  } catch (error) {
    console.error(`Could not fetch fruits, ${error}`);
    throw error;
  }
};

export const getFruitById = async (id: string) => {
  try {
    return await get<Fruit>(`${BASE_URL}${id}`);
  } catch (error) {
    console.error(`Could not fetch fruit with id: ${id}, ${error}`);
    throw error;
  }
};

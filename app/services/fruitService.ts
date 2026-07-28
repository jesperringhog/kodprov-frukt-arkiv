import { Fruit } from "../types/Fruit";

export const getFruits = async () => {
  const response = await fetch("https://www.fruityvice.com/api/fruit/all");
  const data: Fruit[] = await response.json();
  return data;
};

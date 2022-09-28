import api from "Core/api";
import { Restaurant } from "Restaurant/types";

type GetRestaurants = () => Promise<Restaurant[]>;

/**
 * Calls the restaurant listing API and return the response as a list.
 * @returns {Restaurant[]} Restaurant list
 */
const getRestaurants: GetRestaurants = async () => {
  const response = await api.get<Restaurant[]>("restaurants");
  return response.data;
};

export default getRestaurants;

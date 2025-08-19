import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getItems = () => {
  return api.get(`/api/items`);
};

export const getItemsById = (itemId) => {
  return api.get(`/api/items/${itemId}`);
};

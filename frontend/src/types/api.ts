import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

export const getAllMenus = () => API.get("/menus");

export const getMenuById = (id: string) => API.get(`/menus/${id}`);

export const createMenu = (data: object) => API.post("/menus", data);

export const createItem = (data: object) => API.post("/items", data);
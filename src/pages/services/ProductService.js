import axios from "axios";

const baseURL = "http://localhost:3001/appstore";

export const getProductDetails = async (productId) => {
    return axios.get(`${baseURL}/app/${productId}`);
}

export const getAllProducts = async () => {
    return axios.get(`${baseURL}/apps`);
}

export const installProduct = async (data) => {
    return axios.post(`${baseURL}/setup-app`, data);
}
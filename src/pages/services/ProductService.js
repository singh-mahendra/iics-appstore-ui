import axios from "axios";

const baseURL = "http://localhost:3001";

export const getProductDetails = async (productId) => {
    return axios.get(`${baseURL}/products/${productId}`);
}

export const getAllProducts = async () => {
    return axios.get(`${baseURL}/appstore/apps`);
}
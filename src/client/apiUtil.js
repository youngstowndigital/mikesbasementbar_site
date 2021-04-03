import axios from 'axios';
const apiUrl = process.env.API_URL;

export const getMenuCategories = async () => {
    const response = await axios.get(`${apiUrl}/menu-categories`);
    return response.data;
}

export const getMenuItems = async () => {
    const response = await axios.get(`${apiUrl}/menu-items`);
    return response.data;
}

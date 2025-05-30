import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (endpoint, data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export const fetchUsers = async () => {
    return fetchData('users');
};

export const fetchUserById = async (userId) => {
    return fetchData(`users/${userId}`);
};
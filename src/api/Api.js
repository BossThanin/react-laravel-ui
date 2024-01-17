import axios from 'axios';

const Api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {'Authorization': 'Bearer YOUR_ACCESS_TOKEN'}
});

export default Api;
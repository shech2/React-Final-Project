import axios from 'axios';

const BASE_URL = 'http://18.195.148.39:5000/api/';
const TOKEN = process.env.REACT_APP_STRIPE_SECRET;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${TOKEN}` },
});
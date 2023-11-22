import axios from 'axios';

const BASE_URL = 'https://react-final-project-backend.vercel.app/api/';
const TOKEN = process.env.REACT_APP_STRIPE_SECRET;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${TOKEN}` },
});
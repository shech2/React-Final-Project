import axios from 'axios';

const BASE_URL = 'https://ec2-18-195-148-39.eu-central-1.compute.amazonaws.com/api';
const TOKEN = process.env.REACT_APP_STRIPE_SECRET;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${TOKEN}` },
});
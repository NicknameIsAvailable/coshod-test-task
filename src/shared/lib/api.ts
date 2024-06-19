import axios, {CreateAxiosDefaults} from 'axios';

const options: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

const api = axios.create(options);

export default api;

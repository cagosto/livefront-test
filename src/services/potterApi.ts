import axios from 'axios';

const potterApi = axios.create({
  baseURL: 'https://potterhead-api.vercel.app/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default potterApi;


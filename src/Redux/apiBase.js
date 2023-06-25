import axios from 'axios';

const API_BASE_URL = 'https://dev.dfos.co';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
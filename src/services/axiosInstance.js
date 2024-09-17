import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'API-KEY': import.meta.env.VITE_API_KEY,
  },
});

export default axiosInstance;

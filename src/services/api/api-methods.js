import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: '/api/',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    'API-KEY': import.meta.env.VITE_API_KEY,
  },
});

const get = (url) => {
  return (params = '') => {
    const fullUrl = `${url}${params}`;
    return axiosInstance.get(fullUrl).then((response) => response.data);
  };
};

export default get;

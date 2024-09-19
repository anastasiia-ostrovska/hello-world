import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'API-KEY': import.meta.env.VITE_API_KEY,
  },
});

const get = (url) => {
  return (params = '') => {
    const fullUrl = `${url}${params}`;
    return axiosInstance.get(fullUrl);
  };
};

export default get;

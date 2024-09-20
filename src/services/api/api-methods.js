import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: '/api/',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    'API-KEY': import.meta.env.VITE_API_KEY,
  },
});

const request = (requestType) => {
  return (url) => {
    return (params = '') => {
      const fullUrl = `${url}${params}`;
      switch (requestType) {
        case 'GET':
          return axiosInstance.get(fullUrl).then((response) => response.data);
        case 'POST':
          return axiosInstance.post(fullUrl).then((response) => response.data);
        case 'DELETE':
          return axiosInstance
            .delete(fullUrl)
            .then((response) => response.data);

        default:
          axiosInstance.get(fullUrl).then((response) => response.data);
      }
    };
  };
};

const GET = 'GET';
const POST = 'POST';
const DELETE = 'DELETE';

export const get = request(GET);
export const post = request(POST);
export const deleteRequest = request(DELETE);

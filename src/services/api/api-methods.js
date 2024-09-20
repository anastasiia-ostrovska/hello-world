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
    return async (params = '') => {
      const fullUrl = `${url}${params}`;
      let response;

      switch (requestType) {
        case 'GET':
          response = await axiosInstance.get(fullUrl);
          break;
        // return axiosInstance.get(fullUrl).then((response) => response.data);
        case 'POST':
          response = await axiosInstance.post(fullUrl);
          break;

        // return axiosInstance.post(fullUrl).then((response) => response.data);
        case 'DELETE':
          response = await axiosInstance.delete(fullUrl);
          break;

        // return axiosInstance
        //   .delete(fullUrl)
        //   .then((response) => response.data);

        default:
      }

      return response.data;
    };
  };
};

const GET = 'GET';
const POST = 'POST';
const DELETE = 'DELETE';

export const get = request(GET);
export const post = request(POST);
export const deleteRequest = request(DELETE);

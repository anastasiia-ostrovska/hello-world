import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: '/api/',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    'API-KEY': import.meta.env.VITE_API_KEY,
  },
});

const request =
  (requestMethod) =>
  (endpoint) =>
  async (params = '') => {
    const fullUrl = `${endpoint}${params}`;
    let response;

    switch (requestMethod) {
      case 'GET':
        response = await axiosInstance.get(fullUrl);
        break;
      case 'POST':
        response = await axiosInstance.post(fullUrl);
        break;
      case 'DELETE':
        response = await axiosInstance.delete(fullUrl);
        break;

      default:
    }

    return response.data;
  };

const GET = 'GET';
const POST = 'POST';
const DELETE = 'DELETE';

export const get = request(GET);
export const post = request(POST);
export const deleteRequest = request(DELETE);

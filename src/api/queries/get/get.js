import axiosInstance from '@/api/axiosInstance';

const get = (url) => {
  return (params = '') => {
    const fullUrl = `${url}${params}`;
    return axiosInstance.get(fullUrl);
  };
};

export default get;

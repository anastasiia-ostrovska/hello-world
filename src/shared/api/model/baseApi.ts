import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('API-KEY', import.meta.env.VITE_API_KEY);
      return headers;
    },
    credentials: 'include',
  }),
  tagTypes: ['Users', 'Auth'],
  endpoints: () => ({}),
});

export default baseAPI;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PROXY_BASE_URL,
    tagTypes: ['Users'],
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_API_TOKEN}`);
      headers.set('API-KEY', import.meta.env.VITE_API_KEY);

      return headers;
    },
    credentials: 'include',
  }),
  endpoints: () => ({}),
});

export default baseApi;

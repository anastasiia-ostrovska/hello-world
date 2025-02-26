import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as TAGS from '../config/invalidation-tags';

const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: import.meta.env.VITE_API_MOCK_ERROR_URL,
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('API-KEY', import.meta.env.VITE_API_KEY);
      return headers;
    },
    credentials: 'include',
  }),
  tagTypes: [TAGS.USERS, TAGS.AUTH],
  endpoints: () => ({}),
});

export default baseAPI;

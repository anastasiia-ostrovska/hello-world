import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@app/store';
import * as TAGS from './config/invalidation-tags';

const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set('API-KEY', import.meta.env.VITE_API_KEY);
      const { token } = (getState() as RootState).accessToken;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
    credentials: 'include',
  }),
  tagTypes: [TAGS.USERS, TAGS.AUTH],
  endpoints: () => ({}),
});

export default baseAPI;

import type { RootState } from '@app/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logError, logSuccess } from './model/responseLoggers';
import unauthorizedHandler from './model/unauthorizedHandler';
import * as TAGS from './config/invalidation-tags';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_MOCK_BASE_URL,
  // baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    headers.set('x-api-key', import.meta.env.VITE_MOCK_API_KEY);
    // headers.set('API-KEY', import.meta.env.VITE_API_KEY);
    const { token } = (getState() as RootState).auth;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
  // credentials: 'include',
});

const baseQueryWithInterceptor: typeof baseQuery = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions);
  const { data, error } = result;

  if (data) logSuccess(data);
  if (error) {
    logError(error);
    unauthorizedHandler(error);
  }
  return result;
};

const baseAPI = createApi({
  baseQuery: baseQueryWithInterceptor,
  tagTypes: [TAGS.USERS, TAGS.AUTH],
  endpoints: () => ({}),
});

export default baseAPI;

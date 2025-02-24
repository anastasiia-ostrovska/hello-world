import { AuthMeResponse } from './types';
import { AUTH_ME } from '../config/endpoints';
import * as TAGS from '../config/invalidation-tags';
import baseAPI from './baseApi';

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query<AuthMeResponse, void>({
      query: () => AUTH_ME,
      providesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useGetAuthDataQuery } = authApi;

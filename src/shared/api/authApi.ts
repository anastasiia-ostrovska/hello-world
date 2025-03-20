import { ApiResponseTemplate, AuthData } from './model/types';
import { AUTH_ME } from './config/endpoints';
import { baseAPI } from './api';
import * as TAGS from './config/invalidation-tags';

type AuthMeResponse = ApiResponseTemplate<AuthData>;

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query<AuthMeResponse, void>({
      query: () => AUTH_ME,
      providesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useGetAuthDataQuery } = authApi;

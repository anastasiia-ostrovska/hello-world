import { ApiResponseTemplate, AuthData } from './model/types';
import { AUTH_ME } from './config/endpoints';
import * as TAGS from './config/invalidation-tags';
import baseAPI from './baseApi';

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

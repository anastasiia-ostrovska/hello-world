import { AUTH_ME } from '@shared/api/config/endpoints';
import { getErrorMessage } from '@shared/error';
import { ApiResponseTemplate, AuthData } from './types';
import checkResponseError from './checkResponseError';
import baseAPI from './baseApi';
import * as TAGS from '../config/invalidation-tags';

type AuthMeResponse = ApiResponseTemplate<AuthData>;

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query<AuthMeResponse, void>({
      query: () => AUTH_ME,
      transformResponse: (response: AuthMeResponse) =>
        checkResponseError(response),
      transformErrorResponse: (response) => getErrorMessage(response),
      providesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useGetAuthDataQuery } = authApi;

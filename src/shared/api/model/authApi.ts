import { AUTH_ME } from '@shared/api/config/endpoints';
import { getErrorMessage } from '@shared/error';
import { ApiResponseTemplate, AuthData } from './types';
import * as TAGS from '../config/invalidation-tags';
import baseAPI from './baseApi';

type AuthMeResponse = ApiResponseTemplate<AuthData>;

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query<AuthMeResponse, void>({
      query: () => AUTH_ME,
      transformResponse: (response: AuthMeResponse) => {
        if (response.resultCode !== 0) {
          throw new Error(response.messages[0]);
        }
        return response;
      },
      transformErrorResponse: (response) => getErrorMessage(response),
      providesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useGetAuthDataQuery } = authApi;

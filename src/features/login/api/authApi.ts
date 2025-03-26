import { ApiSuccessResponse, baseAPI, ENDPOINTS, TAGS } from '@shared/api';
import type { AuthData } from '../model/types';

type AuthMeResponse = ApiSuccessResponse<AuthData>;

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query<AuthMeResponse, void>({
      query: () => ({
        url: ENDPOINTS.AUTH_ME,
        headers: {
          // 'x-mock-response-code': '401',
        },
      }),
      providesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useGetAuthDataQuery } = authApi;

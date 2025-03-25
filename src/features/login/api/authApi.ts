import { ApiResponseTemplate, baseAPI, ENDPOINTS, TAGS } from '@shared/api';
import type { AuthData } from '../model/types';

type AuthMeResponse = ApiResponseTemplate<AuthData>;

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query<AuthMeResponse, void>({
      query: () => ENDPOINTS.AUTH_ME,
      providesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useGetAuthDataQuery } = authApi;

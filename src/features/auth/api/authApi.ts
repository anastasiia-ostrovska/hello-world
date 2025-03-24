import { ApiResponseTemplate } from '@shared/api/model/types';
import { AUTH_ME } from '@shared/api/config/endpoints';
import { baseAPI } from '@shared/api/api';
import * as TAGS from '@shared/api/config/invalidation-tags';
import type { AuthData } from '../model/types';

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

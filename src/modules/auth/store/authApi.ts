import { AuthMeResponse } from '@/modules/auth/types';
import { AUTH_ME } from '@/shared/constants/API-endpoints';
import baseAPI from '@/redux/base-API';

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query<AuthMeResponse, void>({
      query: () => AUTH_ME,
    }),
  }),
  overrideExisting: true,
});

export const { useGetAuthDataQuery } = authApi;

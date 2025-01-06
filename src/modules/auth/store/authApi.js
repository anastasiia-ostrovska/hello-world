import { AUTH_ME } from '@/shared/constants/API-endpoints';
import baseAPI from '@/store/base-API';

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query({
      query: () => AUTH_ME,
    }),
  }),
  overrideExisting: true,
});

export const { useGetAuthDataQuery } = authApi;

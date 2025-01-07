import { baseAPI } from '@/redux';
import { AUTH_ME } from '@/shared/constants/API-endpoints';

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query({
      query: () => AUTH_ME,
    }),
  }),
  overrideExisting: true,
});

export const { useGetAuthDataQuery } = authApi;

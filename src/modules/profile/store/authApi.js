import baseAPI from '@/store/base-API';
import * as endpoints from '@/shared/constants/API-endpoints';

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query({
      query: () => endpoints.AUTH_ME,
    }),
  }),
  overrideExisting: true,
});

export const { useGetAuthDataQuery } = authApi;

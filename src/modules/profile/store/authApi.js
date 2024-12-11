import baseApi from '@/store/baseApi';
import * as endpoints from '@/shared/constants/api';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query({
      query: () => endpoints.AUTH_ME,
    }),
  }),
  overrideExisting: true,
});

export const { useGetAuthDataQuery } = authApi;

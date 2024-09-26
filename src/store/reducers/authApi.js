import baseApi from '@/services/baseApi';
import * as endpoints from '@/constants/api';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query({
      query: () => endpoints.AUTH_ME,
    }),
  }),
  overrideExisting: true,
});

const { useGetAuthDataQuery } = authApi;
export default useGetAuthDataQuery;

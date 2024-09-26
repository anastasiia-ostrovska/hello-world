import baseApi from '@/services/baseApi';
import * as endpoints from '@/constants/api';

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (userId) => `${endpoints.PROFILE}/${userId}`,
    }),
  }),
});

const { useGetUserProfileQuery } = profileApi;
export default useGetUserProfileQuery;

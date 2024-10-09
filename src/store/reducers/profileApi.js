import baseApi from '@/services/baseApi';
import * as endpoints from '@/shared/constants/api';

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (userId) => `${endpoints.PROFILE}/${userId}`,
    }),
  }),
});

export const { useGetUserProfileQuery } = profileApi;

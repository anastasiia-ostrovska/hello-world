import baseAPI from '@/store/base-API';
import * as endpoints from '@/shared/constants/API-endpoints';

const profileApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (userId) => `${endpoints.PROFILE}/${userId}`,
    }),
  }),
});

export const { useGetUserProfileQuery } = profileApi;

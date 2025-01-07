import { baseAPI } from '@/redux';
import { PROFILE } from '@/shared/constants/API-endpoints';

const profileApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (userId) => `${PROFILE}/${userId}`,
    }),
  }),
});

export const { useGetUserProfileQuery } = profileApi;

import { ProfileDataResponse } from '@/modules/profile/types';
import { PROFILE } from '@/shared/constants/API-endpoints';
import baseAPI from '@/redux/base-API';

const profileApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<ProfileDataResponse, number>({
      query: (userId) => `${PROFILE}/${userId}`,
    }),
  }),
});

export const { useGetUserProfileQuery } = profileApi;

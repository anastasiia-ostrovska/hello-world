import { ProfileDataResponse } from '@/modules/profile/types';
import { UserId } from '@/modules/users';
import { baseAPI, PROFILE } from '@/shared/api';

const profileApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<ProfileDataResponse, UserId>({
      query: (userId) => `${PROFILE}/${userId}`,
    }),
  }),
});

export const { useGetUserProfileQuery } = profileApi;

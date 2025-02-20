import { ProfileDataResponse } from '@/modules/profile/types';
import { baseAPI, PROFILE } from '@/shared/api';
import { User } from '@/shared/user';

const profileApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<ProfileDataResponse, User['id']>({
      query: (userId) => `${PROFILE}/${userId}`,
    }),
  }),
});

export const { useGetUserProfileQuery } = profileApi;

import { ProfileDataResponse } from '@/modules/profile/types';
import { baseAPI, ENDPOINTS } from '@/shared/api';
import { User } from '@/shared/user';

const profileApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<ProfileDataResponse, User['id']>({
      query: (userId) => `${ENDPOINTS.PROFILE}/${userId}`,
    }),
  }),
});

export const { useGetUserProfileQuery } = profileApi;

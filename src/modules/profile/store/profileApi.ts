import { ProfileDataResponse } from '@/modules/profile/types';
import { UserId } from '@/modules/users/types';
import { PROFILE } from '@/shared/constants/query-endpoints';
import baseAPI from '@/redux/base-API';

const profileApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<ProfileDataResponse, UserId>({
      query: (userId) => `${PROFILE}/${userId}`,
    }),
  }),
});

export const { useGetUserProfileQuery } = profileApi;

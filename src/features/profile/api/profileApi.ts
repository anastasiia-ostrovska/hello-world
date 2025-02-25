import { baseAPI, ENDPOINTS } from '@shared/api';
import { User } from '@shared/user';
import { ProfileDataResponse } from '../model/types';

const profileApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<ProfileDataResponse, User['id']>({
      query: (userId) => `${ENDPOINTS.PROFILE}/${userId}`,
    }),
  }),
});

export const { useGetUserProfileQuery } = profileApi;

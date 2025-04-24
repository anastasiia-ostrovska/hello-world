import { skipToken } from '@reduxjs/toolkit/query';
import {
  generateFakeUsers,
  UserWithInfo,
  useUserByIdQuery,
  useUserMeQuery,
} from '@entities/user';
import { useImagesSize } from '../lib/useImagesSize';
import { useProfileInfoErrorHandling } from './useProfileInfoErrorHandling';

interface UseUserProfileInfoResult {
  user: UserWithInfo;
  isLoading: boolean;
  isError: boolean;
  isMyProfile: boolean;
  networkCount: {
    following: number;
    followedBy: number;
  };
  imageSize: number;
}

export const useUserProfileInfo = ({
  userId,
}: {
  userId: string;
}): UseUserProfileInfoResult => {
  const { data: myData } = useUserMeQuery();
  const { id: myId } = myData?.data || {};
  const { data, isLoading, isError, error } = useUserByIdQuery(
    userId ?? skipToken
  );

  const isMyProfile = userId === myId;
  const fakeUser = generateFakeUsers(1)[0];
  const user = data?.data || fakeUser;
  const networkCount = {
    following: user.following.length,
    followedBy: user.followedBy.length,
  };

  useProfileInfoErrorHandling({ error });
  const { imageSize } = useImagesSize();

  return { user, isLoading, isError, isMyProfile, networkCount, imageSize };
};

import { skipToken } from '@reduxjs/toolkit/query';
import {
  generateFakeUsers,
  UserWithInfo,
  useUserByIdQuery,
  useUserMeQuery,
} from '@entities/user';
import { useImagesSize } from '../lib/useImagesSize';

interface UseUserProfileInfoResult {
  user: UserWithInfo;
  isLoading: boolean;
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
  const { data: userData, isLoading: isUserLoading } = useUserByIdQuery(
    userId ?? skipToken
  );
  const isMyProfile = userId === myId;
  const fakeUser = generateFakeUsers(1)[0];
  const user = userData?.data || fakeUser;
  const networkCount = {
    following: user.following.length,
    followedBy: user.followedBy.length,
  };

  const { imageSize } = useImagesSize();

  return {
    user,
    isLoading: isUserLoading,
    isMyProfile,
    networkCount,
    imageSize,
  };
};

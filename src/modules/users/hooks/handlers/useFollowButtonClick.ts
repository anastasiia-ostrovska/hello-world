import { UserId } from '@/modules/users/types';
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '@/modules/users/store/usersApi';
import { useCallback } from 'react';

export interface FollowButtonParams {
  userId: UserId;
  isFollowed: boolean;
}

export interface FollowButtonClickHandler {
  handleButtonClick: () => void;
  isLoading: boolean;
}

const useFollowButtonClick = ({
  userId,
  isFollowed,
}: FollowButtonParams): FollowButtonClickHandler => {
  const [followUser, { isLoading: isLoadingFollow }] = useFollowUserMutation();
  const [unfollowUser, { isLoading: isLoadingUnfollow }] =
    useUnfollowUserMutation();

  const isLoading = isLoadingFollow || isLoadingUnfollow;

  const handleButtonClick = useCallback(() => {
    if (isFollowed) {
      unfollowUser(userId);
    } else {
      followUser(userId);
    }
  }, [unfollowUser, userId, followUser, isFollowed]);

  return { handleButtonClick, isLoading };
};

export default useFollowButtonClick;

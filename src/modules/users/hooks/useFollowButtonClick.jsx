import { useCallback } from 'react';
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '@/modules/users/store/usersApi';

const useFollowButtonClick = () => {
  const [followUser, { isLoading: isLoadingFollow }] = useFollowUserMutation();
  const [unfollowUser, { isLoading: isLoadingUnfollow }] =
    useUnfollowUserMutation();

  const isDisabled = isLoadingFollow || isLoadingUnfollow;

  const handleFollowClick = useCallback(
    (userId) => {
      followUser(userId);
    },
    [followUser]
  );

  const handleUnfollowClick = useCallback(
    (userId) => {
      unfollowUser(userId);
    },
    [unfollowUser]
  );

  return { handleFollowClick, handleUnfollowClick, isDisabled };
};

export default useFollowButtonClick;

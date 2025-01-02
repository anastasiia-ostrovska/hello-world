import { useCallback, useMemo } from 'react';
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '@/modules/users/store/usersApi';

const useFollowButton = ({ userId, isFollowed }) => {
  const [followUser, { isLoading: isLoadingFollow }] = useFollowUserMutation();
  const [unfollowUser, { isLoading: isLoadingUnfollow }] =
    useUnfollowUserMutation();

  const isDisabled = isLoadingFollow || isLoadingUnfollow;

  const handleClick = useCallback(() => {
    if (isFollowed) {
      unfollowUser(userId);
    } else {
      followUser(userId);
    }
  }, [unfollowUser, userId, followUser, isFollowed]);

  const label = useMemo(
    () => (isFollowed ? 'unfollow' : 'follow'),
    [isFollowed]
  );

  const variant = useMemo(
    () => (isFollowed ? 'outlined' : 'contained'),
    [isFollowed]
  );

  return { handleClick, isDisabled, label, variant };
};

export default useFollowButton;

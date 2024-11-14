import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '@/modules/users/store/usersApi';

const useFollowButtonClick = () => {
  const [followUser, { isLoading: isLoadingFollow }] = useFollowUserMutation();
  const [unfollowUser, { isLoading: isLoadingUnfollow }] =
    useUnfollowUserMutation();

  const isDisabled = isLoadingFollow || isLoadingUnfollow;

  const handleFollowClick = (userId) => {
    followUser(userId);
  };

  const handleUnfollowClick = (userId) => {
    unfollowUser(userId);
  };

  return { handleFollowClick, handleUnfollowClick, isDisabled };
};

export default useFollowButtonClick;

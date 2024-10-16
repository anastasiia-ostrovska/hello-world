import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import Grid2 from '@mui/material/Grid2';
import UserCard from '@/modules/users/ui/containers/UserCard';
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '@/modules/users/store/usersApi';

const UserCardsList = ({ users }) => {
  const navigate = useNavigate();

  const [
    unfollowUser,
    // { isLoading: isLoadingUnfollow, originalArgs: unfollowUserId },
  ] = useUnfollowUserMutation();

  const [
    followUser,
    // { isLoading: isLoadingFollow, originalArgs: followUserId },
  ] = useFollowUserMutation();

  const handleUserCardClick = useCallback(
    (userId) => {
      navigate(`/profile/${userId}`);
    },
    [navigate]
  );

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

  return (
    <Grid2
      container
      component="ul"
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: '100%' }}
    >
      {users.map((user) => (
        <Grid2
          key={user.id}
          size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
          component="li"
        >
          <UserCard
            data={user}
            avatarSize={60}
            backgroundImageSize={60}
            isButtonDisabled={false}
            onUserCardClick={handleUserCardClick}
            onFollowClick={handleFollowClick}
            onUnfollowClick={handleUnfollowClick}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default UserCardsList;

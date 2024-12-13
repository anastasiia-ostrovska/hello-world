import useFollowButtonClick from '@/modules/users/hooks/useFollowButtonClick';
import Button from '@mui/material/Button';

const FollowButton = ({ userId, isFollowed, sx = {} }) => {
  const { handleFollowClick, handleUnfollowClick, isDisabled } =
    useFollowButtonClick();

  if (isFollowed) {
    return (
      <Button
        variant="outlined"
        onClick={() => handleUnfollowClick(userId)}
        disabled={isDisabled}
        sx={{ ...sx }}
      >
        Unfollow
      </Button>
    );
  }

  return (
    <Button
      variant="contained"
      onClick={() => handleFollowClick(userId)}
      disabled={isDisabled}
      sx={{ ...sx }}
    >
      Follow
    </Button>
  );
};

export default FollowButton;

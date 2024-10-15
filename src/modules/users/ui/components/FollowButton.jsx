import Button from '@mui/material/Button';

const FollowButton = ({
  isFollowed,
  disabled,
  onFollowClick,
  onUnfollowClick,
}) => {
  return (
    <Button
      variant={isFollowed ? 'outlined' : 'contained'}
      onClick={isFollowed ? onUnfollowClick : onFollowClick}
      disabled={disabled}
      sx={{ width: '100%' }}
    >
      {isFollowed ? 'Unfollow' : 'Follow'}
    </Button>
  );
};

export default FollowButton;

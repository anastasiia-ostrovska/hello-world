import useFollowButton from '@/modules/users/hooks/ui/useFollowButton';
import Button from '@mui/material/Button';

const FollowButton = ({ userId, isFollowed, sx = {} }) => {
  const { handleClick, isDisabled, label, variant } = useFollowButton({
    userId,
    isFollowed,
  });

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      disabled={isDisabled}
      aria-label={label}
      sx={{ ...sx }}
    >
      {label}
    </Button>
  );
};

export default FollowButton;

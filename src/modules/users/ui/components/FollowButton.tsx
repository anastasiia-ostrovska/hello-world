import { UserId } from '@/modules/users/types';
import { Styles } from '@/shared/mui';
import useFollowButton from '@/modules/users/hooks/ui/useFollowButton';
import Button from '@mui/material/Button';

export interface FollowButtonProps {
  userId: UserId;
  isFollowed: boolean;
  sx?: Styles;
}

const FollowButton = ({ userId, isFollowed, sx = {} }: FollowButtonProps) => {
  const { handleButtonClick, isDisabled, label, variant } = useFollowButton({
    userId,
    isFollowed,
  });

  return (
    <Button
      variant={variant}
      onClick={handleButtonClick}
      disabled={isDisabled}
      aria-label={label}
      sx={{ ...sx }}
    >
      {label}
    </Button>
  );
};

export default FollowButton;

import { Styles } from '@/shared/mui';
import Button from '@mui/material/Button';
import useFollowButton from '../model/useFollowButton';
import { User } from '../model/types';

export interface FollowButtonProps {
  userId: User['id'];
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

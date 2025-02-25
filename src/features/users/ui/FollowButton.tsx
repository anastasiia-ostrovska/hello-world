import { Styles } from '@shared/mui';
import { User } from '@shared/user';
import Button from '@mui/material/Button';
import useFollowButton from '../model/useFollowButton';

export interface FollowButtonProps {
  isLoading: boolean;
  userId: User['id'];
  isFollowed: boolean;
  sx?: Styles;
}

const FollowButton = ({
  isLoading,
  userId,
  isFollowed,
  sx = {},
}: FollowButtonProps) => {
  const { handleButtonClick, isDisabled, label, variant } = useFollowButton({
    userId,
    isFollowed,
    isLoading,
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

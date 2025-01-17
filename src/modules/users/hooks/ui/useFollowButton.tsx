import { ButtonProps } from '@mui/material';
import { useMemo } from 'react';
import useFollowButtonClick, {
  FollowButtonClickHandler,
  FollowButtonParams,
} from '@/modules/users/hooks/handlers/useFollowButtonClick';

type ButtonLabel = 'unfollow' | 'follow';
type ButtonVariant = Extract<ButtonProps['variant'], 'outlined' | 'contained'>;

interface FollowButtonProps {
  handleButtonClick: FollowButtonClickHandler['handleButtonClick'];
  isDisabled: boolean;
  label: ButtonLabel;
  variant: ButtonVariant;
}

const useFollowButton = ({
  userId,
  isFollowed,
}: FollowButtonParams): FollowButtonProps => {
  const { handleButtonClick, isLoading } = useFollowButtonClick({
    userId,
    isFollowed,
  });

  const label = useMemo(
    (): ButtonLabel => (isFollowed ? 'unfollow' : 'follow'),
    [isFollowed]
  );

  const variant = useMemo(
    (): ButtonVariant => (isFollowed ? 'outlined' : 'contained'),
    [isFollowed]
  );

  return { handleButtonClick, isDisabled: isLoading, label, variant };
};

export default useFollowButton;

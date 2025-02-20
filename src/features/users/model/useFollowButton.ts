import { ButtonProps } from '@mui/material';
import { User } from './types';
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '../api/usersApi';

enum ButtonLabel {
  Unfollow = 'unfollow',
  Follow = 'follow',
}

type ButtonVariant = Extract<ButtonProps['variant'], 'outlined' | 'contained'>;

interface FollowButtonParams {
  userId: User['id'];
  isFollowed: boolean;
  isLoading: boolean;
}

interface UseFollowButtonResult {
  handleButtonClick: () => void;
  isDisabled: boolean;
  label: ButtonLabel;
  variant: ButtonVariant;
}

const useFollowButton = ({
  userId,
  isFollowed,
  isLoading,
}: FollowButtonParams): UseFollowButtonResult => {
  const [followUser, { isLoading: isLoadingFollow }] = useFollowUserMutation();
  const [unfollowUser, { isLoading: isLoadingUnfollow }] =
    useUnfollowUserMutation();

  const isDisabled = isLoading || isLoadingFollow || isLoadingUnfollow;
  const label = isFollowed ? ButtonLabel.Unfollow : ButtonLabel.Follow;
  const variant = isFollowed ? 'outlined' : 'contained';

  const handleButtonClick = () => {
    if (isFollowed) {
      unfollowUser(userId);
    } else {
      followUser(userId);
    }
  };

  return { isDisabled, label, variant, handleButtonClick };
};

export default useFollowButton;

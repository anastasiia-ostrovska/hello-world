import { ReactElement } from 'react';
import { SkeletonWrapper } from '@shared/ui';
import { UserAvatar, useUserMeQuery } from '@entities/user';

interface ProfileAvatarLayoutProps {
  avatar: ReactElement;
  isLoading: boolean;
}

const ProfileAvatarLayout = ({
  avatar,
  isLoading,
}: ProfileAvatarLayoutProps) => {
  return (
    <SkeletonWrapper
      variant="circular"
      isLoading={isLoading}
      element={avatar}
    />
  );
};

interface ProfileAvatarProps {
  userId: string | undefined;
  size: number;
}

const ProfileAvatar = ({ userId, size }: ProfileAvatarProps) => {
  const { data: userResponse, isLoading } = useUserMeQuery();

  return (
    <ProfileAvatarLayout
      avatar={
        <UserAvatar
          name={userResponse?.data?.name || ''}
          avatarSrc={userResponse?.data.photos?.avatar || null}
          avatarSize={size}
        />
      }
      isLoading={isLoading || !userId}
    />
  );
};

export default ProfileAvatar;

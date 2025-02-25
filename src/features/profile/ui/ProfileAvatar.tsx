import { ReactElement } from 'react';
import { User } from '@shared/user';
import { SkeletonWrapper } from '@shared/ui/SkeletonLoaders';
import { UserAvatar } from '@features/users';
import { useGetUserProfileQuery } from '@features/profile/api/profileApi';
import { skipToken } from '@reduxjs/toolkit/query';

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
  userId: User['id'] | undefined;
  size: number;
}

const ProfileAvatar = ({ userId, size }: ProfileAvatarProps) => {
  const { data, isLoading } = useGetUserProfileQuery(userId ?? skipToken);

  return (
    <ProfileAvatarLayout
      avatar={
        <UserAvatar
          userName={data?.fullName || ''}
          src={data?.photos?.small || null}
          size={size}
        />
      }
      isLoading={isLoading || !userId}
    />
  );
};

export default ProfileAvatar;

import { SkeletonWrapper } from '@/modules/loaders';
import { UserAvatar } from '@/features/users';
import useMyProfileData from '@/modules/profile/hooks/api/useMyProfileData';

interface ProfileAvatarProps {
  size: number;
}

const ProfileAvatar = ({ size }: ProfileAvatarProps) => {
  const { data, isLoading } = useMyProfileData();

  return (
    <SkeletonWrapper
      variant="circular"
      isLoading={isLoading}
      element={
        <UserAvatar
          userName={data?.fullName || ''}
          src={data?.photos?.small || null}
          size={size}
        />
      }
    />
  );
};

export default ProfileAvatar;

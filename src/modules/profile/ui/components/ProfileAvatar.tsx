import { UserAvatar } from '@/modules/users';
import { SkeletonWrapper } from '@/modules/loaders';
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
          name={data?.fullName}
          src={data?.photos?.small}
          size={size}
        />
      }
    />
  );
};

export default ProfileAvatar;

import { UserAvatar } from '@/modules/users';
import { SkeletonLoaderWrapper } from '@/modules/loaders';
import useProfileData from '@/modules/profile/hooks/useProfileData';

const ProfileAvatar = ({ size }) => {
  const { data, isLoading } = useProfileData();

  return (
    <SkeletonLoaderWrapper
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

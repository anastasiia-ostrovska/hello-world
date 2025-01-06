import { UserAvatar } from '@/modules/users';
import { SkeletonWrapper } from '@/modules/loaders';
import useProfileData from '@/modules/profile/hooks/useProfileData';

const ProfileAvatar = ({ size }) => {
  const { data, isLoading } = useProfileData();

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

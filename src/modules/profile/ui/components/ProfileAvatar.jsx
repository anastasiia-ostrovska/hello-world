import { UserAvatar } from '@/modules/users';
import { SkeletonWrapper } from '@/modules/loaders';
import useMyProfileData from '@/modules/profile/hooks/api/useMyProfileData';

const ProfileAvatar = ({ size }) => {
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

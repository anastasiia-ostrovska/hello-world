import { UserAvatar } from '@/modules/users';
import useProfileData from '@/modules/profile/hooks/useProfileData';
import Skeleton from '@mui/material/Skeleton';

const ProfileAvatar = ({ size }) => {
  const { data, isLoading } = useProfileData();

  if (isLoading) {
    return <Skeleton variant="circular" width={size} height={size} />;
  }

  return (
    <UserAvatar name={data.fullName} src={data.photos.small} size={size} />
  );
};

export default ProfileAvatar;

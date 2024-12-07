import { useProfileData, ProfileIconButton } from '@/modules/profile';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

const ProfileMenuButton = ({ size, onClick }) => {
  const { data, isLoading } = useProfileData();

  if (isLoading) {
    return (
      <IconButton aria-label="profile is loading">
        <CircularProgress size={size} />
      </IconButton>
    );
  }

  return (
    <ProfileIconButton
      name={data.fullName}
      src={data.photos.small}
      onClick={onClick}
      size={size}
      ariaLabel={`${data.fullName} profile menu`}
    />
  );
};

export default ProfileMenuButton;

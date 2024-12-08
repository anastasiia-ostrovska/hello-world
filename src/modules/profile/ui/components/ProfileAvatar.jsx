import { useTheme } from '@mui/material/styles';
import { UserAvatar } from '@/modules/users';
import useProfileData from '@/modules/profile/hooks/useProfileData';
import CircularProgress from '@mui/material/CircularProgress';

const ProfileAvatar = ({ size }) => {
  const { data, isLoading } = useProfileData();
  const theme = useTheme();

  if (isLoading) {
    return (
      <CircularProgress
        size={size}
        sx={{
          borderRadius: '50%',
          backgroundColor: theme.palette.text.disabled,
        }}
      />
    );
  }

  return (
    <UserAvatar name={data.fullName} src={data.photos.small} size={size} />
  );
};

export default ProfileAvatar;

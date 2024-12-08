import { ProfileAvatar } from '@/modules/profile';
import IconButton from '@mui/material/IconButton';

const ProfileMenuButton = ({ size, onClick }) => {
  return (
    <IconButton aria-label="Profile menu" onClick={(event) => onClick(event)}>
      <ProfileAvatar size={size} />
    </IconButton>
  );
};

export default ProfileMenuButton;

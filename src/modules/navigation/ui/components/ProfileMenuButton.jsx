import { ProfileAvatar } from '@/modules/profile';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const ProfileMenuButton = ({ size, onClick }) => {
  return (
    <Tooltip title="Profile menu">
      <IconButton aria-label="Profile menu" onClick={(event) => onClick(event)}>
        <ProfileAvatar size={size} />
      </IconButton>
    </Tooltip>
  );
};

export default ProfileMenuButton;

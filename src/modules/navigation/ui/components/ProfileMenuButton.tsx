import { MenuBtnClickHandler } from '@/modules/navigation/types';
import { ProfileAvatar } from '@/modules/profile';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface ProfileMenuButtonProps {
  size: number;
  onClick: MenuBtnClickHandler;
}

const ProfileMenuButton = ({ size, onClick }: ProfileMenuButtonProps) => {
  return (
    <Tooltip title="Profile menu">
      <IconButton aria-label="Profile menu" onClick={(event) => onClick(event)}>
        <ProfileAvatar size={size} />
      </IconButton>
    </Tooltip>
  );
};

export default ProfileMenuButton;

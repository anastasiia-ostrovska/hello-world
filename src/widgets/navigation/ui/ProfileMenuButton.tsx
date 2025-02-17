import { MouseEvent } from 'react';
import { ProfileAvatar } from '@/modules/profile';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface ProfileMenuButtonProps {
  id: string;
  controlsID: string;
  size: number;
  isMenuOpen: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

const ProfileMenuButton = ({
  id,
  controlsID,
  size,
  isMenuOpen,
  onClick,
}: ProfileMenuButtonProps) => {
  return (
    <Tooltip title="Profile menu">
      <IconButton
        id={id}
        aria-label="Profile menu"
        aria-haspopup="true"
        aria-controls={isMenuOpen ? controlsID : undefined}
        aria-expanded={isMenuOpen ? 'true' : undefined}
        onClick={(event) => onClick(event)}
      >
        <ProfileAvatar size={size} />
      </IconButton>
    </Tooltip>
  );
};

export default ProfileMenuButton;

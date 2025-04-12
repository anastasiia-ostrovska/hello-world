import { MouseEvent } from 'react';
import { ProfileAvatar } from '@features/profile';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface ProfileMenuButtonProps {
  userId: string | undefined;
  buttonId: string;
  controlsId: string;
  size: number;
  isMenuOpen: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

const ProfileMenuButton = ({
  userId,
  buttonId,
  controlsId,
  size,
  isMenuOpen,
  onClick,
}: ProfileMenuButtonProps) => {
  return (
    <Tooltip title="Profile menu">
      <IconButton
        id={buttonId}
        aria-label="Profile menu"
        aria-haspopup="true"
        aria-controls={isMenuOpen ? controlsId : undefined}
        aria-expanded={isMenuOpen ? 'true' : undefined}
        onClick={(event) => onClick(event)}
      >
        <ProfileAvatar userId={userId} size={size} />
      </IconButton>
    </Tooltip>
  );
};

export default ProfileMenuButton;

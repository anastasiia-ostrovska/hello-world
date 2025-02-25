import { MouseEvent } from 'react';
import { User } from '@shared/user';
import { ProfileAvatar } from '@features/profile';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface ProfileMenuButtonProps {
  userId: User['id'] | undefined;
  buttonID: string;
  controlsID: string;
  size: number;
  isMenuOpen: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

const ProfileMenuButton = ({
  userId,
  buttonID,
  controlsID,
  size,
  isMenuOpen,
  onClick,
}: ProfileMenuButtonProps) => {
  return (
    <Tooltip title="Profile menu">
      <IconButton
        id={buttonID}
        aria-label="Profile menu"
        aria-haspopup="true"
        aria-controls={isMenuOpen ? controlsID : undefined}
        aria-expanded={isMenuOpen ? 'true' : undefined}
        onClick={(event) => onClick(event)}
      >
        <ProfileAvatar userId={userId} size={size} />
      </IconButton>
    </Tooltip>
  );
};

export default ProfileMenuButton;

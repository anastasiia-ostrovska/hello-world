import { UserAvatar } from '@/modules/users';
import IconButton from '@mui/material/IconButton';

const ProfileIconButton = ({ name, src, onClick, size, ariaLabel }) => {
  return (
    <IconButton aria-label={ariaLabel} onClick={(event) => onClick(event)}>
      <UserAvatar name={name} src={src} size={size} />
    </IconButton>
  );
};

export default ProfileIconButton;

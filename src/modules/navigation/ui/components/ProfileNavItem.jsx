import { UserAvatar } from '@/modules/users';
import IconButton from '@mui/material/IconButton';

const ProfileNavItem = ({ name, src, onClick, size }) => {
  return (
    <IconButton aria-label={name} onClick={() => onClick()}>
      <UserAvatar name={name} src={src} size={size} />
    </IconButton>
  );
};

export default ProfileNavItem;

import { UserAvatar } from '@/modules/users';
import IconButton from '@mui/material/IconButton';

const ProfileNavItem = ({ name, src, onClick }) => {
  return (
    <IconButton aria-label={name} onClick={() => onClick()}>
      <UserAvatar name={name} src={src} size={24} />
    </IconButton>
  );
};

export default ProfileNavItem;

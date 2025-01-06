import { ProfileAvatar } from '@/modules/profile';
import useLogout from '@/modules/auth/hooks/handlers/useLogout';
import Chip from '@mui/material/Chip';

const LogoutButton = ({ avatarSize }) => {
  const handleLogout = useLogout();

  return (
    <Chip
      component="button"
      clickable
      variant="outlined"
      label="Log out"
      aria-label="Log out"
      color="error"
      avatar={<ProfileAvatar size={avatarSize} />}
      onClick={handleLogout}
      sx={{ display: 'flex', justifySelf: 'center', pl: '3px' }}
    />
  );
};

export default LogoutButton;

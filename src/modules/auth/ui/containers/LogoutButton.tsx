import Chip from '@mui/material/Chip';
import LogoutIcon from '@/modules/auth/ui/components/LogoutIcon';
import { useLogOutMutation } from '@/modules/auth/store/authApi';

interface LogoutButtonProps {
  iconSize: number;
  onClick: () => void;
}

const LogoutButton = ({ iconSize, onClick }: LogoutButtonProps) => {
  const [logOut] = useLogOutMutation();

  const handleLogOut = () => {
    onClick();
    logOut();
  };

  return (
    <Chip
      component="button"
      clickable
      variant="outlined"
      label="Log out"
      aria-label="Log out"
      color="error"
      avatar={<LogoutIcon iconSize={iconSize} />}
      onClick={handleLogOut}
      sx={{ display: 'flex', justifySelf: 'center', pl: '3px' }}
    />
  );
};

export default LogoutButton;

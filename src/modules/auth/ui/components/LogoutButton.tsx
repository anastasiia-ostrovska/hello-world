import useLogout from '@/modules/auth/hooks/handlers/useLogout';
import Chip from '@mui/material/Chip';
import LogoutIcon from '@/modules/auth/ui/components/LogoutIcon';

interface LogoutButtonProps {
  iconSize: number;
}

const LogoutButton = ({ iconSize }: LogoutButtonProps) => {
  const handleLogout = useLogout();

  return (
    <Chip
      component="button"
      clickable
      variant="outlined"
      label="Log out"
      aria-label="Log out"
      color="error"
      avatar={<LogoutIcon iconSize={iconSize} />}
      onClick={handleLogout}
      sx={{ display: 'flex', justifySelf: 'center', pl: '3px' }}
    />
  );
};

export default LogoutButton;

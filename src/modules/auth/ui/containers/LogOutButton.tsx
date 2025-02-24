import useLogOut from '@/features/login/model/useLogOut';
import Chip from '@mui/material/Chip';
import LogoutIcon from '@/modules/auth/ui/components/LogoutIcon';

interface LogOutButtonProps {
  iconSize: number;
}

const LogOutButton = ({ iconSize }: LogOutButtonProps) => {
  const { handleLogOut, isLoading } = useLogOut();

  return (
    <Chip
      component="button"
      disabled={isLoading}
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

export default LogOutButton;

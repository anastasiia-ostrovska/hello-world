import { MenuCloseHandler } from '@/modules/navigation';
import Chip from '@mui/material/Chip';
import LogoutIcon from '@/modules/auth/ui/components/LogoutIcon';

interface LogoutButtonProps {
  iconSize: number;
  onClick: MenuCloseHandler;
}

const LogoutButton = ({ iconSize, onClick }: LogoutButtonProps) => {
  return (
    <Chip
      component="button"
      clickable
      variant="outlined"
      label="Log out"
      aria-label="Log out"
      color="error"
      avatar={<LogoutIcon iconSize={iconSize} />}
      onClick={onClick}
      sx={{ display: 'flex', justifySelf: 'center', pl: '3px' }}
    />
  );
};

export default LogoutButton;

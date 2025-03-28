import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material';

interface CloseAllNotificationsButtonProps extends ButtonProps {
  onClick: () => void;
}

export const CloseAllNotificationsButton = ({
  onClick,
  ...props
}: CloseAllNotificationsButtonProps) => {
  return (
    <Button
      color="inherit"
      variant="text"
      size="small"
      aria-label="Close all notifications"
      sx={{ width: 'max-content', justifySelf: 'end' }}
      onClick={onClick}
      {...props}
    >
      Close All
    </Button>
  );
};

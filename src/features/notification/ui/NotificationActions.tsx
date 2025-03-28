import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { useAppDispatch } from '@shared/redux';
import {
  clearAllNotifications,
  removeNotification,
} from '@entities/notification';

export const NotificationActions = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const handleRemoveNotification = () => {
    dispatch(removeNotification(id));
  };

  const handleClearAllNotification = () => {
    dispatch(clearAllNotifications());
  };

  return (
    <Stack direction="row" sx={{ alignSelf: 'end' }}>
      <Tooltip title="Dismiss all notifications">
        <Button
          color="inherit"
          variant="text"
          size="small"
          sx={{ width: 'max-content', justifySelf: 'end' }}
          aria-label="close all notifications"
          onClick={handleClearAllNotification}
        >
          Close All
        </Button>
      </Tooltip>
      <IconButton
        aria-label="close notification"
        size="small"
        color="inherit"
        onClick={handleRemoveNotification}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};

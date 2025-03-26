import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '@shared/redux';
import { ReactElement } from 'react';
import { AlertTitle } from '@mui/material';
import {
  clearAllNotifications,
  removeNotification,
  selectFirstNotification,
} from '../model/notificationSlice';

const NotificationActions = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Button
        color="inherit"
        variant="text"
        size="small"
        sx={{ width: 'max-content' }}
        aria-label="close all notifications"
        onClick={() => dispatch(clearAllNotifications())}
      >
        Close All
      </Button>
      <IconButton
        size="small"
        aria-label="close notification"
        onClick={() => dispatch(removeNotification(id))}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    </>
  );
};

const ToastNotification = ({
  action = null,
}: {
  action?: ReactElement | null;
}) => {
  const notification = useAppSelector(selectFirstNotification);

  if (!notification) return null;

  const { id, type, message, title } = notification;

  return (
    <Snackbar
      open
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      sx={{ mb: { xs: 7, sm: 5, md: 0 } }}
    >
      <Alert
        severity={type}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          maxWidth: 400,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        action={action ?? <NotificationActions id={id} />}
      >
        {!!title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastNotification;

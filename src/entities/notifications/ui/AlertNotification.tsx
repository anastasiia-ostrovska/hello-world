import { forwardRef, ReactElement } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { AlertProps } from '@mui/material';
import { AlertElements } from '../model/types';

interface AlertNotificationProps extends AlertElements, AlertProps {
  action?: ReactElement | null;
}

export const AlertNotification = forwardRef<
  HTMLDivElement,
  AlertNotificationProps
>(({ alertType, message, title = '', action = null, ...props }, ref) => {
  return (
    <Alert ref={ref} severity={alertType} action={action} {...props}>
      {!!title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  );
});

AlertNotification.displayName = 'AlertNotification';

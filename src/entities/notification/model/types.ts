import { AlertProps } from '@mui/material';

export interface AlertElements {
  alertType: AlertProps['severity'];
  message: string;
  title?: string;
}

export interface NotificationItem extends AlertElements {
  id: string;
}

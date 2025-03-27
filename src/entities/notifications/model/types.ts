import { AlertProps } from '@mui/material';

export interface NotificationItem {
  id: string;
  alertType: AlertProps['severity'];
  message: string;
  title?: string;
}

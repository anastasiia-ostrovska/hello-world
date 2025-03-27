import { AlertProps } from '@mui/material';

interface Notification {
  alertType: AlertProps['severity'];
  message: string;
  title?: string;
}

const createNotification =
  (alertType: AlertProps['severity']) =>
  ({
    message,
    title = '',
  }: {
    message: string;
    title?: string;
  }): Notification => ({ alertType, message, title });

export const createInfoNotification = createNotification('info');
export const createSuccessNotification = createNotification('success');
export const createWarningNotification = createNotification('warning');
export const createErrorNotification = createNotification('error');

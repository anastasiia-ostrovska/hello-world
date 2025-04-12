import { ReactElement } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useAppSelector } from '@shared/model';
import { useMediaQueryState } from '@shared/lib';
import { NotificationActions } from '@features/notification';
import {
  EmbeddedNotification,
  selectLastNotification,
} from '@entities/notification';

const PopupNotificationLayout = ({
  popupContent,
}: {
  popupContent: ReactElement;
}) => {
  return (
    <Snackbar
      open
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      sx={{
        mb: {
          xs: 7,
          sm: 5,
          md: 0,
        },
      }}
    >
      {popupContent}
    </Snackbar>
  );
};

export const PopupNotificationWithControls = () => {
  const { isUpSM } = useMediaQueryState();
  const notification = useAppSelector(selectLastNotification);

  if (!notification) return null;

  const { id, alertType, message, title } = notification;

  return (
    <PopupNotificationLayout
      popupContent={
        <EmbeddedNotification
          alertType={alertType}
          message={message}
          title={title}
          action={<NotificationActions id={id} />}
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: isUpSM ? '' : 'center',
            width: '100%',
            maxWidth: isUpSM ? 400 : 350,
          }}
        />
      }
    />
  );
};

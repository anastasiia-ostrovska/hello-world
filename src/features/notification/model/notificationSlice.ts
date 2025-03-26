import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertProps } from '@mui/material';

interface NotificationItem {
  id: string;
  type: AlertProps['severity'];
  message: string;
  title?: string;
}

interface NotificationState {
  notifications: NotificationItem[];
}

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  selectors: {
    selectAllNotifications: (state) => state.notifications,
    selectFirstNotification: (state) => state.notifications[0] || null,
  },
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<{
        type: AlertProps['severity'];
        message: string;
        title?: string;
      }>
    ) => {
      const { type, message, title } = action.payload;

      state.notifications.push({
        id: crypto.randomUUID(),
        type,
        message,
        title: title || '',
      });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { selectAllNotifications, selectFirstNotification } =
  notificationSlice.selectors;
export const { addNotification, removeNotification, clearAllNotifications } =
  notificationSlice.actions;

export default notificationSlice;

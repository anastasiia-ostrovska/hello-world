import { combineSlices } from '@reduxjs/toolkit';
import { baseAPI } from '@shared/api';
import { notificationSlice } from '@features/notification';
import { themeSlice } from '@features/theme';
import { authSlice } from '@features/auth';
import { usersSlice } from '@features/users';

const rootReducer = combineSlices(
  baseAPI,
  // mockAPI,
  notificationSlice,
  authSlice,
  themeSlice,
  usersSlice
);

export default rootReducer;

import { combineSlices } from '@reduxjs/toolkit';
import { authSlice, baseAPI } from '@shared/api';
import { notificationSlice } from '@entities/notification';
import { themeSlice } from '@features/theme';
import { usersSlice } from '@features/users';

const rootReducer = combineSlices(
  baseAPI,
  authSlice,
  notificationSlice,
  themeSlice,
  usersSlice
);

export default rootReducer;

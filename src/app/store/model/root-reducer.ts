import { combineSlices } from '@reduxjs/toolkit';
import { baseAPI } from '@shared/api';
import { sessionSlice } from '@entities/session';
import { themeSlice } from '@entities/theme';
import { notificationSlice } from '@entities/notification';
import { usersSlice } from '@entities/user';

const rootReducer = combineSlices(
  baseAPI,
  sessionSlice,
  notificationSlice,
  themeSlice,
  usersSlice
);

export default rootReducer;

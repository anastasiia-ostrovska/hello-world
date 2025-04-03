import { combineSlices } from '@reduxjs/toolkit';
import { authSlice, baseAPI } from '@shared/api';
import { notificationSlice } from '@entities/notification';
import { themeSlice } from 'src/features/mode-switcher';
import { usersSlice } from '@features/users';

const rootReducer = combineSlices(
  baseAPI,
  authSlice,
  notificationSlice,
  themeSlice,
  usersSlice
);

export default rootReducer;

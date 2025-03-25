import { combineSlices } from '@reduxjs/toolkit';
import { baseAPI, tokenSlice } from '@shared/api';
import { notificationSlice } from '@features/notification';
import { themeSlice } from '@features/theme';
import { usersSlice } from '@features/users';

const rootReducer = combineSlices(
  baseAPI,
  tokenSlice,
  notificationSlice,
  themeSlice,
  usersSlice
);

export default rootReducer;

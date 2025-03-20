import { combineSlices } from '@reduxjs/toolkit';
import { themeSlice } from '@features/theme';
import { usersSlice } from '@features/users';
import { authSlice, baseAPI, mockAPI } from '@shared/api';

const rootReducer = combineSlices(
  baseAPI,
  mockAPI,
  authSlice,
  themeSlice,
  usersSlice
);

export default rootReducer;

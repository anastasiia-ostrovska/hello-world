import { combineSlices } from '@reduxjs/toolkit';
import { baseAPI } from '@shared/api';
import { themeSlice } from '@features/theme';
import { authSlice } from '@features/auth';
import { usersSlice } from '@features/users';

const rootReducer = combineSlices(
  baseAPI,
  // mockAPI,
  themeSlice,
  authSlice,
  usersSlice
);

export default rootReducer;

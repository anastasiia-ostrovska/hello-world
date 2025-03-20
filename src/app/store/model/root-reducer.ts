import { combineSlices } from '@reduxjs/toolkit';
import { authSlice, baseAPI } from '@shared/api';
import { errorSlice } from '@features/error';
import { themeSlice } from '@features/theme';
import { usersSlice } from '@features/users';

const rootReducer = combineSlices(
  baseAPI,
  // mockAPI,
  errorSlice,
  authSlice,
  themeSlice,
  usersSlice
);

export default rootReducer;

import { combineSlices } from '@reduxjs/toolkit';
import { themeSlice } from '@features/theme';
import { usersSlice } from '@features/users';
import { authSlice, baseAPI } from '@shared/api';

const rootReducer = combineSlices(baseAPI, authSlice, themeSlice, usersSlice);

export default rootReducer;

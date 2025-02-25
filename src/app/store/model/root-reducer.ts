import { combineSlices } from '@reduxjs/toolkit';
import { themeSlice } from '@features/theme';
import { usersSlice } from '@features/users';
import { baseAPI } from '@shared/api';

const rootReducer = combineSlices(baseAPI, themeSlice, usersSlice);

export default rootReducer;

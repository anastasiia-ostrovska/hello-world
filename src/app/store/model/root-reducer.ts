import { combineSlices } from '@reduxjs/toolkit';
import { themeSlice } from '@/features/theme';
import { usersSlice } from '@/modules';
import { baseAPI } from '@/shared/api';

const rootReducer = combineSlices(baseAPI, themeSlice, usersSlice);

export default rootReducer;

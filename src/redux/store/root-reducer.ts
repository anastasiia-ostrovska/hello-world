import { combineSlices } from '@reduxjs/toolkit';
import { themeSlice, usersSlice } from '@/modules';
import baseAPI from '@/redux/api';

const rootReducer = combineSlices(baseAPI, themeSlice, usersSlice);

export default rootReducer;

import { combineSlices } from '@reduxjs/toolkit';
import { themeSlice } from '@/modules/theme';
import baseAPI from '@/redux/base-API';

const rootReducer = combineSlices(baseAPI, themeSlice);

export default rootReducer;

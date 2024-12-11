import { combineSlices } from '@reduxjs/toolkit';
import baseApi from '@/store/baseApi';

const rootReducer = combineSlices(baseApi);

export default rootReducer;

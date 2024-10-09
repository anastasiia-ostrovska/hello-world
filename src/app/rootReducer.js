import { combineSlices } from '@reduxjs/toolkit';
import baseApi from '@/services/baseApi';

const rootReducer = combineSlices(baseApi);

export default rootReducer;

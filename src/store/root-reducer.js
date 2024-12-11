import { combineSlices } from '@reduxjs/toolkit';
import baseAPI from '@/store/base-API';

const rootReducer = combineSlices(baseAPI);

export default rootReducer;

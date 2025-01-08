import { combineSlices } from '@reduxjs/toolkit';
import baseAPI from '@/redux/base-API';

const rootReducer = combineSlices(baseAPI);

export default rootReducer;

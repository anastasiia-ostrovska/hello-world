export type { ApiResponseTemplate } from './model/types';

export * as ENDPOINTS from './config/endpoints';
export * as METHODS from './config/methods';
export * as TAGS from './config/invalidation-tags';
export * from './model/authSlice';

export { default as authSlice } from './model/authSlice';
export { default as baseAPI } from './baseApi';

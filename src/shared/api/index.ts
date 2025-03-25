export type { ApiResponseTemplate } from './model/types';

export * as ENDPOINTS from './config/endpoints';
export * as METHODS from './config/methods';
export * as TAGS from './config/invalidation-tags';

export {
  storeAccessToken,
  removeAccessToken,
  selectAccessToken,
} from './model/tokenSlice';

export { default as tokenSlice } from './model/tokenSlice';
export { default as baseAPI } from './baseApi';

export type { ApiResponseTemplate } from './model/types';

export * as ENDPOINTS from './config/endpoints';
export * as METHODS from './config/methods';
export * as TAGS from './config/invalidation-tags';

export {
  setStoredToken,
  removeStoredToken,
} from './model/tokenStorageHandlers';
export {
  storeAccessToken,
  removeAccessToken,
  selectAccessToken,
} from './model/authSlice';

export { baseAPI, mockAPI } from './api';
export { default as authSlice } from './model/authSlice';
export { default as useAuth } from './model/useAuth';
export { default as checkResponseError } from './model/checkResponseError';

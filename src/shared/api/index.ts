export type { ApiResponseTemplate } from './model/types';

export * as ENDPOINTS from './config/endpoints';
export * as METHODS from './config/methods';
export * as TAGS from './config/invalidation-tags';

export { default as baseAPI } from './model/baseApi';
export { default as useAuth } from './model/useAuth';
export { default as checkResponseError } from './model/checkResponseError';

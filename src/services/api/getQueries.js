import * as endpoints from '@/constants/api';
import get from './api-methods';

export const getUsers = get(endpoints.USERS);
export const getUserProfile = get(endpoints.PROFILE);
export const getAuthData = get(endpoints.AUTH_ME);

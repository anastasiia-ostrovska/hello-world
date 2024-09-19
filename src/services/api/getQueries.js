import * as endpoints from '@/constants/api';
import get from './api-methods';

export const getUsers = get(endpoints.USERS);
export const getUserProfile = get(endpoints.PROFILE);

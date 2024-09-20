import * as endpoints from '@/constants/api';
import * as api from './api-methods';

// GET
export const getUsers = api.get(endpoints.USERS);
export const getUserProfile = api.get(endpoints.PROFILE);
export const getAuthData = api.get(endpoints.AUTH_ME);

// POST
export const postFollowState = api.post(endpoints.FOLLOW);

// DELETE
export const deleteFollowState = api.deleteRequest(endpoints.FOLLOW);

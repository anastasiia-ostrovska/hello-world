import * as endpoints from '@/constants/api';
import { deleteRequest, get, post } from './api-methods';

// GET
export const getUsers = get(endpoints.USERS);
export const getUserProfile = get(endpoints.PROFILE);
export const getAuthData = get(endpoints.AUTH_ME);

// POST
export const postFollowState = post(endpoints.FOLLOW);

// DELETE
export const deleteFollowState = deleteRequest(endpoints.FOLLOW);

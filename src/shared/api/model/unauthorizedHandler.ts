import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { AppDispatch } from '@app/store';
import { ROUTES } from '@shared/router';
import { removeAccessToken } from './tokenSlice';

const unauthorizedHandler = (
  error: FetchBaseQueryError | undefined,
  dispatch: AppDispatch
): void => {
  if (error?.status === 401) {
    console.warn('🔄 Unauthorized! Removing token and redirecting to login.');
    dispatch(removeAccessToken());
    window.location.href = ROUTES.LOGIN;
  }
};

export default unauthorizedHandler;

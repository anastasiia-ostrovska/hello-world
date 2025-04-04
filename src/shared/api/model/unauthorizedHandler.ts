import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ROUTES } from '@shared/router';
import { removeStoredToken } from './tokenStorageHandlers';

const unauthorizedHandler = (error: FetchBaseQueryError | undefined): void => {
  if (error?.status === 401) {
    console.warn('🔄 Unauthorized! Removing token and redirecting to login.');
    removeStoredToken();
    window.location.replace(ROUTES.LOGIN);
  }
};

export default unauthorizedHandler;

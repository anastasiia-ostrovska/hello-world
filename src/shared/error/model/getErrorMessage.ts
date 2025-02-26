import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ERROR_MESSAGES } from '../config/error-messages';
import {
  isFetchBaseQueryError,
  isSerializedError,
} from './errorTypePredicates';

const getMessageAccordingToStatus = (
  status: FetchBaseQueryError['status']
): string => {
  switch (status) {
    case 400:
      return ERROR_MESSAGES.INVALID_REQUEST;
    case 401:
      return ERROR_MESSAGES.UNAUTHORIZED;
    case 403:
      return ERROR_MESSAGES.FORBIDDEN;
    case 404:
      return ERROR_MESSAGES.NOT_FOUND;
    case 500:
      return ERROR_MESSAGES.SERVER_ERROR;
    case 'FETCH_ERROR':
      return ERROR_MESSAGES.NETWORK_ERROR;
    case 'PARSING_ERROR':
      return ERROR_MESSAGES.PARSING_ERROR;
    default:
      return ERROR_MESSAGES.UNEXPECTED_ERROR;
  }
};

const getErrorMessage = (error: unknown): string => {
  if (isFetchBaseQueryError(error)) {
    const { data, status } = error;

    if (typeof data === 'string') {
      return data; // Direct error message from backend
    }
    if (data && typeof data === 'object' && 'message' in data) {
      return String((data as any).message); // Extract "message" field from JSON
    }

    return getMessageAccordingToStatus(status); // Custom message according to error status
  }

  if (isSerializedError(error)) {
    return error.message || ERROR_MESSAGES.UNEXPECTED_ERROR;
  }

  return ERROR_MESSAGES.UNEXPECTED_ERROR;
};

export default getErrorMessage;

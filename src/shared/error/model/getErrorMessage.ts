import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import {
  isFetchBaseQueryError,
  isSerializedError,
} from './errorTypePredicates';

const getMessageAccordingToStatus = (
  status: FetchBaseQueryError['status']
): string => {
  switch (status) {
    case 400:
      return 'Invalid request. Please check your input.';
    case 401:
      return 'You are unauthorized. Please log in.';
    case 403:
      return "You don't have permission to perform this action.";
    case 404:
      return 'Requested resource is not found.';
    case 500:
      return 'Server error. Please try again later.';
    case 'FETCH_ERROR':
      return 'Network error. Please check your internet connection.';
    case 'PARSING_ERROR':
      return 'Invalid response from the server.';
    default:
      return 'An unexpected error occurred.';
  }
};

const getErrorMessage = (error: unknown): string => {
  debugger;
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
    return error.message || 'An unexpected error occurred.';
  }

  return 'An unknown error occurred.';
};

export default getErrorMessage;

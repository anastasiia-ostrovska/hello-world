import {
  isFetchBaseQueryError,
  isSerializedError,
} from '@shared/error/model/errorTypePredicates';
import { DEFAULT_ERROR_MESSAGES } from '@shared/error/config/default-error-messages';
import { Error, ErrorMessages } from './types';

interface ErrorMessage {
  message: string;
  errorType: Error;
  title?: string;
}

export const getErrorMessage =
  (specificErrorMessages: ErrorMessages) =>
  (error: unknown): ErrorMessage => {
    const generalErrorMessages = {
      ...DEFAULT_ERROR_MESSAGES,
      ...specificErrorMessages,
    };

    if (isFetchBaseQueryError(error)) {
      const { data } = error;

      if (
        data &&
        typeof data === 'object' &&
        'errorType' in data &&
        typeof data.errorType === 'string'
      ) {
        const errorType = data.errorType as Error;

        const message =
          generalErrorMessages[errorType] ||
          generalErrorMessages[Error.UnexpectedError];

        return {
          ...message,
          errorType,
        };
      }
    }

    if (isSerializedError(error)) {
      return {
        message: error.message,
        errorType: Error.SerializedError,
      };
    }

    return {
      ...generalErrorMessages[Error.UnexpectedError],
      errorType: Error.UnexpectedError,
    };
  };

import { Error } from '@shared/error';
import {
  isFetchBaseQueryError,
  isSerializedError,
} from '@shared/error/model/errorTypePredicates';
import { DEFAULT_ERROR_MESSAGES } from '@shared/error/config/default-error-messages';

interface ErrorMessage {
  message: string;
  type: Error;
  title?: string;
}

export const getErrorMessage =
  (specificErrorMessages: Record<Error, ErrorMessage>) =>
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
        'type' in data &&
        typeof data.type === 'string'
      ) {
        const type = data.type as Error;

        const message =
          generalErrorMessages[type] ||
          generalErrorMessages[Error.UnexpectedError];

        return {
          ...message,
          type,
        };
      }
    }

    if (isSerializedError(error)) {
      return {
        message: error.message,
        type: Error.SerializedError,
      };
    }

    return {
      ...generalErrorMessages[Error.UnexpectedError],
      type: Error.UnexpectedError,
    };
  };

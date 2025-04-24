import { useEffect } from 'react';
import { useAppDispatch } from '@shared/model';
import {
  Error,
  ErrorMessages,
  getErrorMessage,
  isErrorTypeInError,
  isFetchBaseQueryError,
} from '@shared/error-message';
import { createErrorNotificationElement } from '../lib/createNotificationElement';
import { addNotification } from './notificationSlice';

interface UseErrorPopupNotificationParams {
  error: unknown;
  errorMessages?: ErrorMessages;
  exceptions?: Error[];
}

export const useErrorPopupNotification = ({
  error,
  errorMessages = {},
  exceptions = [],
}: UseErrorPopupNotificationParams) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      const isExceptedErrorType = exceptions.some((errorType) =>
        isErrorTypeInError({ error, errorType })
      );
      if (isExceptedErrorType) return;
      if (isFetchBaseQueryError(error) && error?.status === 401) return;

      const getCurrentErrorMessage = getErrorMessage(errorMessages);
      const errorMessage = getCurrentErrorMessage(error);
      const errorNotification = createErrorNotificationElement(errorMessage);

      dispatch(addNotification(errorNotification));
    }
  }, [dispatch, error, errorMessages, exceptions]);
};

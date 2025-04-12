import { useEffect } from 'react';
import { useAppDispatch } from '@shared/model';
import {
  ErrorMessages,
  getErrorMessage,
  isFetchBaseQueryError,
} from '@shared/error-message';
import { createErrorNotificationElement } from '../lib/createNotificationElement';
import { addNotification } from './notificationSlice';

interface UseErrorPopupNotificationParams {
  error: unknown;
  errorMessages?: ErrorMessages;
}

export const useErrorPopupNotification = ({
  error,
  errorMessages = {},
}: UseErrorPopupNotificationParams) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      if (isFetchBaseQueryError(error) && error?.status === 401) return;

      const getCurrentErrorMessage = getErrorMessage(errorMessages);
      const errorMessage = getCurrentErrorMessage(error);
      const errorNotification = createErrorNotificationElement(errorMessage);

      dispatch(addNotification(errorNotification));
    }
  }, [dispatch, error, errorMessages]);
};

import { useAppDispatch } from '@shared/redux';
import { ErrorMessages, getErrorMessage } from '@shared/error-message';
import { isFetchBaseQueryError } from '@shared/error-message/lib/errorTypePredicates';
import { createErrorNotificationElement } from '../lib/createNotificationElement';
import { addNotification } from './notificationSlice';

export const useErrorPopupNotification = (errorMessages?: ErrorMessages) => {
  const dispatch = useAppDispatch();
  const getCurrentErrorMessage = getErrorMessage(errorMessages);

  const showErrorPopupNotification = (error: unknown) => {
    if (isFetchBaseQueryError(error) && error?.status === 401) return;

    const { title, message } = getCurrentErrorMessage(error);
    const errorNotification = createErrorNotificationElement({
      message,
      title,
    });
    dispatch(addNotification(errorNotification));
  };

  return { showErrorPopupNotification };
};

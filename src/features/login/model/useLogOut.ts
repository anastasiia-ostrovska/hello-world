import { useAppDispatch } from '@shared/redux';
import { removeAccessToken } from '@shared/api';
import {
  addNotification,
  createErrorNotificationElement,
} from '@entities/notification';
import { getErrorMessage } from '@entities/error-message';
import { useLogoutMutation } from '@entities/session/api/loginApi';

interface UseLogOutResult {
  handleLogOut: () => void;
  isLogOutRequestLoading: boolean;
}

const useLogOut = (): UseLogOutResult => {
  const [logOut, { isLoading }] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    try {
      await logOut().unwrap();
      dispatch(removeAccessToken());
    } catch (error: unknown) {
      const getLogoutErrorMessage = getErrorMessage();
      const { title, message } = getLogoutErrorMessage(error);
      const errorNotification = createErrorNotificationElement({
        message,
        title,
      });

      dispatch(addNotification(errorNotification));
    }
  };

  return { handleLogOut, isLogOutRequestLoading: isLoading };
};

export default useLogOut;

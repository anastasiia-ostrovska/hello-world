import { useAppDispatch } from '@shared/redux';
import { removeAccessToken, setIsAuth } from '@shared/api';
import {
  addNotification,
  createErrorNotificationElement,
} from '@entities/notification';
import { getErrorMessage } from '@entities/error-message';
import { useLogOutMutation } from '../api/loginApi';

interface UseLogOutResult {
  handleLogOut: () => void;
  isLogOutRequestLoading: boolean;
}

const useLogOut = (): UseLogOutResult => {
  const [logOut, { isLoading }] = useLogOutMutation();
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    try {
      await logOut().unwrap();
      dispatch(removeAccessToken());
      dispatch(setIsAuth(false));
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

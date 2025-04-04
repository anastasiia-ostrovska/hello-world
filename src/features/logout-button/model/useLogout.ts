import { useAppDispatch } from '@shared/redux';
import { removeAccessToken } from '@entities/session';
import { useErrorPopupNotification } from '@entities/notification';
import { useLogoutMutation } from '@entities/session/api/loginApi';

interface UseLogOutResult {
  handleLogout: () => void;
  isLogOutRequestLoading: boolean;
}

export const useLogout = (): UseLogOutResult => {
  const showErrorPopupNotification = useErrorPopupNotification();
  const dispatch = useAppDispatch();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(removeAccessToken());
    } catch (error) {
      showErrorPopupNotification(error);
    }
  };

  return { handleLogout, isLogOutRequestLoading: isLoading };
};

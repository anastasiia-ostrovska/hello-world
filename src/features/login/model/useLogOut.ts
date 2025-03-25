import { useAppDispatch } from '@shared/redux';
import { removeAccessToken } from '@shared/api';
import { useLogOutMutation } from '../api/loginApi';

interface UseLogOutResult {
  handleLogOut: () => void;
  isLogOutRequestLoading: boolean;
}

const useLogOut = (): UseLogOutResult => {
  const [logOut, { isLoading }] = useLogOutMutation();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    logOut();
    dispatch(removeAccessToken());
  };

  return { handleLogOut, isLogOutRequestLoading: isLoading };
};

export default useLogOut;

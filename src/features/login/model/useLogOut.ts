import { getErrorMessage } from '@shared/error';
import { useLogOutMutation } from './loginApi';

interface UseLogOutResult {
  handleLogOut: () => void;
  isLogOutRequestLoading: boolean;
  errorMessage: string | undefined;
}

const useLogOut = (): UseLogOutResult => {
  const [logOut, { isLoading, error }] = useLogOutMutation();

  let errorMessage;

  if (error) {
    errorMessage = typeof error === 'string' ? error : getErrorMessage(error);
  }

  const handleLogOut = () => {
    logOut();
  };

  return { handleLogOut, isLogOutRequestLoading: isLoading, errorMessage };
};

export default useLogOut;

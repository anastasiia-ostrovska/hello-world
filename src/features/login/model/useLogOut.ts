import { useLogOutMutation } from './loginApi';

interface UseLogOutResult {
  handleLogOut: () => void;
  isLogOutRequestLoading: boolean;
}

const useLogOut = (): UseLogOutResult => {
  const [logOut, { isLoading }] = useLogOutMutation();

  const handleLogOut = () => {
    logOut();
  };

  return { handleLogOut, isLogOutRequestLoading: isLoading };
};

export default useLogOut;

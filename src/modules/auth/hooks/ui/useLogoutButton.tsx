import { useLogOutMutation } from '@/modules/auth/store/authApi';

interface UseLogOutResult {
  handleLogOut: () => void;
  isLoading: boolean;
}

const useLogoutButton = (): UseLogOutResult => {
  const [logOut, { isLoading }] = useLogOutMutation();

  const handleLogOut = () => {
    logOut();
  };

  return { handleLogOut, isLoading };
};

export default useLogoutButton;

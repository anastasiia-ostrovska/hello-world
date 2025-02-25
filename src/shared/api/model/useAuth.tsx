import { useGetAuthDataQuery } from './authApi';
import { AuthData } from './types';

interface UseAuthResult {
  authData: AuthData | undefined;
  isAuth: boolean;
  isLoading: boolean;
}

const useAuth = (): UseAuthResult => {
  const { data, isLoading } = useGetAuthDataQuery();

  const authData = data?.data;
  const resultCode = data?.resultCode;
  const isAuth = resultCode === 0;

  return { authData, isAuth, isLoading };
};

export default useAuth;

import { useGetAuthDataQuery } from './authApi';
import { AuthMeResponse } from './types';

interface AuthData {
  authData: AuthMeResponse['data'] | undefined;
  isAuth: boolean;
  isLoading: boolean;
}

const useAuth = (): AuthData => {
  const { data, isLoading } = useGetAuthDataQuery();

  const authData = data?.data;
  const resultCode = data?.resultCode;
  const isAuth = resultCode === 0;

  return { authData, isAuth, isLoading };
};

export default useAuth;

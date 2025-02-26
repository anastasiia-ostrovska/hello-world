import { getErrorMessage } from '@shared/error';
import { useGetAuthDataQuery } from './authApi';
import { AuthData } from './types';

interface UseAuthResult {
  authData: AuthData | undefined;
  errorMessage: string | undefined;
  isAuth: boolean;
  isLoading: boolean;
}

const useAuth = (): UseAuthResult => {
  const { data, isLoading, error } = useGetAuthDataQuery();

  const authData = data?.data;
  const isAuth = !error && !!authData?.id;
  let errorMessage;

  if (error) {
    errorMessage = typeof error === 'string' ? error : getErrorMessage(error);
  }

  return { authData, isLoading, isAuth, errorMessage };
};

export default useAuth;

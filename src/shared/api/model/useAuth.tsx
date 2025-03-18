import { useAppSelector } from '@shared/redux';
import { selectAccessToken } from './authSlice';
import { useGetAuthDataQuery } from '../authApi';
import { AuthData } from './types';

interface UseAuthResult {
  authData: AuthData | undefined;
  isAuth: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

const useAuth = (): UseAuthResult => {
  const token = useAppSelector(selectAccessToken);
  const { data, isLoading, isSuccess } = useGetAuthDataQuery(undefined, {
    skip: !token,
  });

  const authData = data?.data;
  const resultCode = data?.resultCode;
  const isAuth = resultCode === 0;

  return { authData, isAuth, isLoading, isSuccess };
};

export default useAuth;

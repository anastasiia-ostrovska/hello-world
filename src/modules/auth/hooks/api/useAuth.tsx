import { AuthMeResponse } from '@/modules/auth/types';
import { useGetAuthDataQuery } from '@/modules/auth/store/authApi';

interface UseAuthResult {
  authData: AuthMeResponse['data'] | undefined;
  messages: AuthMeResponse['messages'] | undefined;
  isAuth: boolean;
  isLoading: boolean;
}

const useAuth = (): UseAuthResult => {
  const { data, isLoading } = useGetAuthDataQuery();

  const authData = data?.data;
  const resultCode = data?.resultCode;
  const messages = data?.messages;
  const isAuth = resultCode === 0;

  return { authData, messages, isAuth, isLoading };
};

export default useAuth;

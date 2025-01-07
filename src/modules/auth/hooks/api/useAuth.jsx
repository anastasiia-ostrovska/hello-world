import { useGetAuthDataQuery } from '@/modules/auth/store/authApi';
import { useMemo } from 'react';

const useAuth = () => {
  const { data, isLoading } = useGetAuthDataQuery();

  const { authData, messages, isAuth } = useMemo(() => {
    const authData = data?.data;
    const resultCode = data?.resultCode;
    const messages = data?.messages;
    const isAuth = resultCode === 0;

    return { authData, messages, isAuth };
  }, [data]);

  return { authData, messages, isAuth, isLoading };
};

export default useAuth;

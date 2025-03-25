import { useAppSelector } from '@shared/redux';
import { selectAccessToken } from '@shared/api';
import { useGetAuthDataQuery } from '@features/auth';

interface UseInitializeAppResult {
  isAuth: boolean;
  isInitialized: boolean;
}

const useInitializeApp = (): UseInitializeAppResult => {
  const token = useAppSelector(selectAccessToken);
  const { data, isLoading: isAuthLoading } = useGetAuthDataQuery(undefined, {
    skip: !token,
  });

  console.log('token', token);
  console.log('data', data);

  const authData = data?.data;

  return { isAuth: !!authData?.id, isInitialized: !isAuthLoading };
};

export default useInitializeApp;

import { useAppSelector } from '@shared/redux';
import { selectToken } from '@entities/session';
import { useGetAuthDataQuery } from '@features/login';

interface UseInitializeAppResult {
  isAuth: boolean;
  isInitialized: boolean;
}

const useInitializeApp = (): UseInitializeAppResult => {
  const token = useAppSelector(selectToken);
  const {
    data: authData,
    isSuccess,
    isLoading: isAuthLoading,
  } = useGetAuthDataQuery(undefined, {
    skip: !token,
  });

  const isAuth = isSuccess && !!authData?.data?.userId;

  return { isAuth, isInitialized: !isAuthLoading };
};

export default useInitializeApp;

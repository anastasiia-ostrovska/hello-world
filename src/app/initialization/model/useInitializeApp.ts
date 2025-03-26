import { useAppSelector } from '@shared/redux';
import { selectAccessToken, selectIsAuth } from '@shared/api';
import { useGetAuthDataQuery } from '@features/login';

interface UseInitializeAppResult {
  isAuth: boolean;
  isInitialized: boolean;
}

const useInitializeApp = (): UseInitializeAppResult => {
  const token = useAppSelector(selectAccessToken);
  const isAuth = useAppSelector(selectIsAuth);
  const { isLoading: isAuthLoading } = useGetAuthDataQuery(undefined, {
    skip: !token,
  });

  return { isAuth, isInitialized: !isAuthLoading };
};

export default useInitializeApp;

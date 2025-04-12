import { useAppSelector } from '@shared/model';
import { selectToken, useAuthMeQuery } from '@entities/session';

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
  } = useAuthMeQuery(undefined, {
    skip: !token,
  });

  const isAuth = isSuccess && !!authData?.data?.userId;

  return { isAuth, isInitialized: !isAuthLoading };
};

export default useInitializeApp;

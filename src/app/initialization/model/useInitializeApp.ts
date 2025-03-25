import { useAppSelector } from '@shared/redux';
import { useGetAuthDataQuery } from '@features/auth';
import { selectAccessToken } from '@features/auth/model/authSlice';

interface UseInitializeAppResult {
  isAuth: boolean;
  isInitialized: boolean;
}

const useInitializeApp = (): UseInitializeAppResult => {
  const token = useAppSelector(selectAccessToken);
  const { data, isLoading: isAuthLoading } = useGetAuthDataQuery(undefined, {
    skip: !token,
  });

  const authData = data?.data;

  return { isAuth: !!authData?.id, isInitialized: !isAuthLoading };
};

export default useInitializeApp;

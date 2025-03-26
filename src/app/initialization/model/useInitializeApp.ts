import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@shared/redux';
import { selectAccessToken, selectIsAuth, setIsAuth } from '@shared/api';
import { useGetAuthDataQuery } from '@features/login';

interface UseInitializeAppResult {
  isAuth: boolean;
  isInitialized: boolean;
}

const useInitializeApp = (): UseInitializeAppResult => {
  const token = useAppSelector(selectAccessToken);
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const { isSuccess, isLoading: isAuthLoading } = useGetAuthDataQuery(
    undefined,
    {
      skip: !token,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsAuth(true));
    }
  }, [dispatch, isSuccess]);

  return { isAuth, isInitialized: !isAuthLoading };
};

export default useInitializeApp;

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@shared/redux';
import { useGetAuthDataQuery } from '@features/auth';
import { selectAccessToken } from '@features/auth/model/authSlice';

interface UseInitializeAppResult {
  isAuth: boolean;
  isInitialized: boolean;
}

const useInitializeApp = (): UseInitializeAppResult => {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useAppDispatch();

  const token = useAppSelector(selectAccessToken);

  const { data, isLoading: isAuthLoading } = useGetAuthDataQuery(undefined, {
    skip: !token,
  });

  const authData = data?.data;

  useEffect(() => {
    if (!isAuthLoading) {
      setIsInitialized(true);
    }
  }, [dispatch, isAuthLoading]);

  return { isAuth: !!authData?.id, isInitialized };
};

export default useInitializeApp;

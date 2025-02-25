import { useEffect, useState } from 'react';
import { useAppDispatch } from '@shared/redux';
import { useAuth } from '@shared/api';
import { getStoredThemeMode } from '@shared/theme';
import { setMode } from '@features/theme';

interface UseInitializeAppResult {
  isAuth: boolean;
  isInitialized: boolean;
}

const useInitializeApp = (): UseInitializeAppResult => {
  const { isAuth, isLoading: isAuthLoading } = useAuth();
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthLoading) {
      const mode = getStoredThemeMode();

      if (mode) {
        dispatch(setMode(mode));
      }

      setIsInitialized(true);
    }
  }, [dispatch, isAuthLoading]);

  return { isAuth, isInitialized };
};

export default useInitializeApp;

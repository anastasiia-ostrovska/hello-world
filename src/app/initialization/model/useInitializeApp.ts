import { useEffect, useState } from 'react';
import { useAuth } from '@/shared/api';
import { setMode } from '@/features/theme';
import { getStoredThemeMode } from '@/shared/theme';
import { useAppDispatch } from '@/shared/redux';

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

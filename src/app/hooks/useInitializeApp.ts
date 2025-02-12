import { useAuth } from '@/modules/auth';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/hooks/redux';
import {
  getStoredThemeMode,
  setMode,
  THEME_STORAGE_KEY,
} from '@/modules/theme';

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
      const mode = getStoredThemeMode(THEME_STORAGE_KEY);
      if (mode) {
        dispatch(setMode(mode));
      }

      setIsInitialized(true);
    }
  }, [dispatch, isAuthLoading]);

  return { isAuth, isInitialized };
};

export default useInitializeApp;

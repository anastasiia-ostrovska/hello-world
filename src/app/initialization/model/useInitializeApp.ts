import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store';
import { useAuth } from '@/modules/auth';
import { getStoredThemeMode, setMode } from '@/modules/theme';
import { MODE_STORAGE_KEY } from '@/shared/theme';

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
      const mode = getStoredThemeMode(MODE_STORAGE_KEY);
      if (mode) {
        dispatch(setMode(mode));
      }

      setIsInitialized(true);
    }
  }, [dispatch, isAuthLoading]);

  return { isAuth, isInitialized };
};

export default useInitializeApp;

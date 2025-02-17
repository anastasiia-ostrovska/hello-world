import { useCallback } from 'react';
import { useAppDispatch } from '@/app/store/useAppStore';
import { toggleThemeMode } from '@/features/theme/model/toggleThemeMode';

export type ToggleModeHandler = () => void;

const useToggleMode = (): ToggleModeHandler => {
  const dispatch = useAppDispatch();

  return useCallback((): void => {
    dispatch(toggleThemeMode());
  }, [dispatch]);
};

export default useToggleMode;

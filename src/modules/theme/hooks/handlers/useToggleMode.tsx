import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/hooks/redux';
import toggleThemeMode from '@/modules/theme/store/toggleModeThunk';

export type ToggleModeHandler = () => void;

const useToggleMode = (): ToggleModeHandler => {
  const dispatch = useAppDispatch();

  return useCallback((): void => {
    dispatch(toggleThemeMode());
  }, [dispatch]);
};

export default useToggleMode;

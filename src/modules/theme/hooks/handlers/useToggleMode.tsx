import { useCallback } from 'react';
import toggleThemeMode from '@/modules/theme/store/toggleModeThunk';
import { useAppDispatch } from '@/shared/hooks/redux';

export type ToggleModeHandler = () => void;

const useToggleMode = (): ToggleModeHandler => {
  const dispatch = useAppDispatch();

  return useCallback((): void => {
    dispatch(toggleThemeMode());
  }, [dispatch]);
};

export default useToggleMode;

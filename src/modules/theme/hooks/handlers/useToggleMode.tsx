import { useCallback } from 'react';
import toggleThemeMode from '@/modules/theme/store/toggleModeThunk';
import { useAppDispatch } from '@/shared/hooks/redux';

export type ToggleModeHandler = () => void;

const useToggleMode = (): ToggleModeHandler => {
  const dispatch = useAppDispatch();

  const handleToggleMode = useCallback((): void => {
    dispatch(toggleThemeMode());
  }, [dispatch]);

  return handleToggleMode;
};

export default useToggleMode;

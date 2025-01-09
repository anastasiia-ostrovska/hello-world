import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { selectThemeMode, toggleMode } from '@/modules/theme/store/themeSlice';
import { ThemeMode } from '@/modules/theme/types';
import { THEME_STORAGE_KEY } from '@/modules/theme/constants';
import setStoredThemeMode from '@/modules/theme/helpers/setStoredThemeMode';

interface UseThemeModeResult {
  isDarkMode: boolean;
  nextMode: ThemeMode;
  handleToggleMode: () => void;
}

const useThemeMode = (): UseThemeModeResult => {
  const dispatch = useAppDispatch();
  const currentMode = useAppSelector(selectThemeMode);

  const isDarkMode = currentMode === ThemeMode.Dark;
  const nextMode =
    currentMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;

  const handleToggleMode = useCallback(() => {
    dispatch(toggleMode());
    setStoredThemeMode(THEME_STORAGE_KEY, nextMode);
  }, [dispatch, nextMode]);

  return { isDarkMode, nextMode, handleToggleMode };
};

export default useThemeMode;

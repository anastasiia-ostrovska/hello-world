import { ThemeMode } from '@/shared/theme';
import { useAppDispatch, useAppSelector } from '@/app/store/useAppStore';
import { toggleThemeMode } from './toggleThemeMode';
import { selectThemeMode } from './themeSlice';

interface ThemeModeProps {
  isDarkMode: boolean;
  nextMode: ThemeMode;
  handleToggleMode: () => void;
}

const useThemeMode = (): ThemeModeProps => {
  const currentMode = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();

  const isDarkMode = currentMode === ThemeMode.Dark;
  const nextMode =
    currentMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;

  const handleToggleMode = () => {
    dispatch(toggleThemeMode());
  };

  return { isDarkMode, nextMode, handleToggleMode };
};

export default useThemeMode;

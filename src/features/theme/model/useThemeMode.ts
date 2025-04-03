import { ThemeMode, toggleThemeMode } from '@entities/theme';
import { useAppDispatch, useAppSelector } from '@shared/redux';
import { selectThemeMode } from '@entities/theme/model/themeSlice';

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

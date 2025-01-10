import { ThemeMode } from '@/modules/theme/types';
import { useAppSelector } from '@/shared/hooks/redux';
import { selectThemeMode } from '@/modules/theme/store/themeSlice';
import useToggleMode from '@/modules/theme/hooks/handlers/useToggleMode';

const useThemeMode = () => {
  const currentMode = useAppSelector(selectThemeMode);
  const handleToggleMode = useToggleMode();

  const isDarkMode = currentMode === ThemeMode.Dark;
  const nextMode =
    currentMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;

  return { isDarkMode, nextMode, handleToggleMode };
};

export default useThemeMode;

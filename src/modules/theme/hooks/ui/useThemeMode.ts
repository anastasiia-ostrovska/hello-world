import { ThemeMode } from '@/shared/theme';
import { useAppSelector } from '@/store';
import { selectThemeMode } from '@/modules/theme/store/themeSlice';
import useToggleMode, {
  ToggleModeHandler,
} from '@/modules/theme/hooks/handlers/useToggleMode';

interface ThemeModeProps {
  isDarkMode: boolean;
  nextMode: ThemeMode;
  handleToggleMode: ToggleModeHandler;
}

const useThemeMode = (): ThemeModeProps => {
  const currentMode = useAppSelector(selectThemeMode);
  const handleToggleMode = useToggleMode();

  const isDarkMode = currentMode === ThemeMode.Dark;
  const nextMode =
    currentMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;

  return { isDarkMode, nextMode, handleToggleMode };
};

export default useThemeMode;

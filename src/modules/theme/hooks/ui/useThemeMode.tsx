import { useAppSelector } from '@/shared/hooks/redux';
import { selectThemeMode } from '@/modules/theme/store/themeSlice';
import { ThemeMode } from '@/modules/theme/types';
import useToggleMode, {
  ToggleModeHandler,
} from '@/modules/theme/hooks/handlers/useToggleMode';

interface UseThemeModeResult {
  isDarkMode: boolean;
  nextMode: ThemeMode;
  handleToggleMode: ToggleModeHandler;
}

const useThemeMode = (): UseThemeModeResult => {
  const currentMode = useAppSelector(selectThemeMode);
  const handleToggleMode = useToggleMode();

  const isDarkMode = currentMode === ThemeMode.Dark;
  const nextMode =
    currentMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;

  return { isDarkMode, nextMode, handleToggleMode };
};

export default useThemeMode;

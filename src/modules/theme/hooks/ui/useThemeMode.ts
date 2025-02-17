import { ThemeMode } from '@/shared/theme';
import { useAppSelector } from '@/app/store/useAppStore';
import useToggleMode, {
  ToggleModeHandler,
} from '@/modules/theme/hooks/handlers/useToggleMode';
import { selectThemeMode } from '@/features/theme';

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

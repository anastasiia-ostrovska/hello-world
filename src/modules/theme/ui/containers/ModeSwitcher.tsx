import useThemeMode from '@/modules/theme/hooks/ui/useThemeMode';
import ModeIcon from '@/modules/theme/ui/components/ModeIcon';
import IconButton from '@mui/material/IconButton';

const ModeSwitcher = () => {
  const { isDarkMode, nextMode, handleToggleMode } = useThemeMode();

  return (
    <IconButton
      aria-label={`switch to ${nextMode} mode`}
      onClick={handleToggleMode}
    >
      <ModeIcon isDarkMode={isDarkMode} />
    </IconButton>
  );
};

export default ModeSwitcher;

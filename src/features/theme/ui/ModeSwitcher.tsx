import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useThemeMode from '../model/useThemeMode';

interface ModeIconProps {
  isDarkMode: boolean;
}

const ModeIcon = ({ isDarkMode }: ModeIconProps) => {
  return isDarkMode ? <LightModeIcon /> : <DarkModeIcon />;
};

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

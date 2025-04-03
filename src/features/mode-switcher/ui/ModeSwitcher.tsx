import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';
import { useModeSwitcher } from '../model/useModeSwitcher';

interface ModeIconProps {
  isDarkMode: boolean;
}

const ModeIcon = ({ isDarkMode }: ModeIconProps) => {
  return isDarkMode ? <LightModeIcon /> : <DarkModeIcon />;
};

const ModeSwitcher = () => {
  const { palette } = useTheme();
  const { isDarkMode, nextMode, handleToggleMode } = useModeSwitcher();

  return (
    <IconButton
      aria-label={`switch to ${nextMode} mode`}
      onClick={handleToggleMode}
      sx={{
        color: palette.text.secondary,
      }}
    >
      <ModeIcon isDarkMode={isDarkMode} />
    </IconButton>
  );
};

export default ModeSwitcher;

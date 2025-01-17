import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface ModeIconProps {
  isDarkMode: boolean;
}

const ModeIcon = ({ isDarkMode }: ModeIconProps) => {
  return isDarkMode ? <LightModeIcon /> : <DarkModeIcon />;
};

export default ModeIcon;

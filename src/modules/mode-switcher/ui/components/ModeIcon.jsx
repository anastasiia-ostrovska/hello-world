import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ModeIcon = ({ isLightMode }) => {
  return isLightMode ? <DarkModeIcon /> : <LightModeIcon />;
};

export default ModeIcon;

import { modeType } from '@/modules/Theme';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ModeIcon = ({ mode }) => {
  return mode === modeType.dark ? <LightModeIcon /> : <DarkModeIcon />;
};

export default ModeIcon;

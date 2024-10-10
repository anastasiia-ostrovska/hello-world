import { useSelector } from 'react-redux';
import { selectModeToSwitch } from '@/modules/theme';
import IconButton from '@mui/material/IconButton';
import ModeIcon from '@/modules/mode-switcher/ui/components/ModeIcon';

const SwitchButton = ({ isLightMode, onClick }) => {
  const modeToSwitch = useSelector(selectModeToSwitch);

  return (
    <IconButton aria-label={`switch to ${modeToSwitch} mode`} onClick={onClick}>
      <ModeIcon isLightMode={isLightMode} />
    </IconButton>
  );
};

export default SwitchButton;

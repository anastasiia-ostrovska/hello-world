import IconButton from '@mui/material/IconButton';
import ModeIcon from '@/modules/theme/ui/components/ModeIcon';

const SwitchButton = ({ isLightMode, modeToSwitch, onClick }) => {
  return (
    <IconButton aria-label={`switch to ${modeToSwitch} mode`} onClick={onClick}>
      <ModeIcon isLightMode={isLightMode} />
    </IconButton>
  );
};

export default SwitchButton;

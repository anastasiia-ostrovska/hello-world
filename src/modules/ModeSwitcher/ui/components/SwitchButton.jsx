import { useSelector } from 'react-redux';
import { selectModeToSwitch } from '@/modules/Theme';
import ModeIcon from '@/modules/ModeSwitcher/ui/components/ModeIcon';
import IconButton from '@mui/material/IconButton';

const SwitchButton = ({ mode, onClick }) => {
  const modeToSwitch = useSelector(selectModeToSwitch);

  return (
    <IconButton aria-label={`switch to ${modeToSwitch} mode`} onClick={onClick}>
      <ModeIcon mode={mode} />
    </IconButton>
  );
};

export default SwitchButton;

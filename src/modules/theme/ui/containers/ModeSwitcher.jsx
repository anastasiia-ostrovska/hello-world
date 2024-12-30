import useMode from '@/modules/theme/hooks/useMode';
import SwitchButton from '../components/SwitchButton';

const ModeSwitcher = () => {
  const { isLightMode, modeToSwitch, handleSwitchMode } = useMode();

  return (
    <SwitchButton
      isLightMode={isLightMode}
      modeToSwitch={modeToSwitch}
      onClick={handleSwitchMode}
    />
  );
};

export default ModeSwitcher;

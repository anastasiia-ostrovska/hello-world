import { selectIsLightMode, toggleMode } from '@/modules/Theme';
import { useDispatch, useSelector } from 'react-redux';
import SwitchButton from '@/modules/ModeSwitcher/ui/components/SwitchButton';

const ModeSwitcher = () => {
  const dispatch = useDispatch();
  const isLightMode = useSelector(selectIsLightMode);

  const handleSwitchMode = () => {
    dispatch(toggleMode());
  };

  return <SwitchButton isLightMode={isLightMode} onClick={handleSwitchMode} />;
};

export default ModeSwitcher;

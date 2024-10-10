import { selectIsLightMode, toggleMode } from '@/modules/theme';
import { useDispatch, useSelector } from 'react-redux';
import SwitchButton from '../components/SwitchButton';

const ModeSwitcher = () => {
  const dispatch = useDispatch();
  const isLightMode = useSelector(selectIsLightMode);

  const handleSwitchMode = () => {
    dispatch(toggleMode());
  };

  return <SwitchButton isLightMode={isLightMode} onClick={handleSwitchMode} />;
};

export default ModeSwitcher;

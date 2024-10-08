import { selectMode, switchMode } from '@/modules/Theme';
import { useDispatch, useSelector } from 'react-redux';
import SwitchButton from '@/modules/ModeSwitcher/ui/components/SwitchButton';

const ModeSwitcher = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);

  const handleSwitchMode = () => {
    dispatch(switchMode());
  };

  return <SwitchButton mode={mode} onClick={handleSwitchMode} />;
};

export default ModeSwitcher;

import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLightMode,
  selectModeToSwitch,
  toggleMode,
} from '@/modules/theme/store/themeSlice';
import { useCallback } from 'react';

const useMode = () => {
  const dispatch = useDispatch();
  const isLightMode = useSelector(selectIsLightMode);
  const modeToSwitch = useSelector(selectModeToSwitch);

  const handleSwitchMode = useCallback(() => {
    dispatch(toggleMode());
  }, [dispatch]);

  return { isLightMode, modeToSwitch, handleSwitchMode };
};

export default useMode;

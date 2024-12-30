import { useSelector } from 'react-redux';
import { selectMode } from '@/modules/theme/store/themeSlice';
import { useMemo } from 'react';
import getTheme from '@/modules/theme/config/getTheme';

const useAppTheme = () => {
  const mode = useSelector(selectMode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return theme;
};

export default useAppTheme;

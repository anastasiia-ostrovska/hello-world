import { useSelector } from 'react-redux';
import { selectThemeMode } from '@/modules/theme/store/themeSlice';
import { useMemo } from 'react';
import createAppTheme from '@/modules/theme/config/createAppTheme';

const useTheme = () => {
  const mode = useSelector(selectThemeMode);
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return theme;
};

export default useTheme;

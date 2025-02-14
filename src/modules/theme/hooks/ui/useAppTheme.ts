import { useMemo } from 'react';
import { useAppSelector } from '@/store';
import { selectThemeMode } from '@/modules/theme/store/themeSlice';
import { Theme } from '@mui/material';
import createAppTheme from '@/modules/theme/config/createAppTheme';

const useAppTheme = (): Theme => {
  const mode = useAppSelector(selectThemeMode);

  return useMemo(() => createAppTheme(mode), [mode]);
};

export default useAppTheme;

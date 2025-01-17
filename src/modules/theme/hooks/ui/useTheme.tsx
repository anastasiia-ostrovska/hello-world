import { useMemo } from 'react';
import { useAppSelector } from '@/shared/hooks/redux';
import { selectThemeMode } from '@/modules/theme/store/themeSlice';
import { Theme } from '@mui/material';
import createAppTheme from '@/modules/theme/config/createAppTheme';

const useTheme = (): Theme => {
  const mode = useAppSelector(selectThemeMode);

  return useMemo(() => createAppTheme(mode), [mode]);
};

export default useTheme;

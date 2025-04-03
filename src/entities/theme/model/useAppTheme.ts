import { Theme } from '@mui/material';
import { useAppSelector } from '@shared/redux';
import { createAppTheme } from '../lib/createAppTheme';
import { selectThemeMode } from './themeSlice';

export const useAppTheme = (): Theme => {
  const mode = useAppSelector(selectThemeMode);

  return createAppTheme(mode);
};

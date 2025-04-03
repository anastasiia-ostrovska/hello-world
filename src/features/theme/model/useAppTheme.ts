import { Theme } from '@mui/material';
import { createAppTheme } from '@entities/theme';
import { useAppSelector } from '@shared/redux';
import { selectThemeMode } from './themeSlice';

const useAppTheme = (): Theme => {
  const mode = useAppSelector(selectThemeMode);

  return createAppTheme(mode);
};

export default useAppTheme;

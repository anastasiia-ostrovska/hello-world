import { Theme } from '@mui/material';
import { useAppSelector } from '@/app/store/useAppStore';
import { createAppTheme } from '@/shared/theme';
import { selectThemeMode } from './themeSlice';

const useAppTheme = (): Theme => {
  const mode = useAppSelector(selectThemeMode);

  return createAppTheme(mode);
};

export default useAppTheme;

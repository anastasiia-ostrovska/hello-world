import { createTheme } from '@mui/material';
import type { ThemeMode } from './types';
import getPalette from '../config/getPalette';
import components from '../config/components';

const createAppTheme = (mode: ThemeMode) => {
  return createTheme({
    components,
    palette: getPalette(mode),
  });
};

export default createAppTheme;

import { createTheme } from '@mui/material';
import type { ThemeMode } from '../model/types';
import getPalette from './getPalette';
import components from './components';

const createAppTheme = (mode: ThemeMode) => {
  return createTheme({
    components,
    palette: getPalette(mode),
  });
};

export default createAppTheme;

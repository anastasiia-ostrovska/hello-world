import { createTheme } from '@mui/material';
import { ThemeMode } from '@/modules/theme/types';
import getPalette from '@/modules/theme/config/getPalette';
import components from '@/modules/theme/config/components';

const createAppTheme = (mode: ThemeMode) => {
  return createTheme({
    components,
    palette: getPalette(mode),
  });
};

export default createAppTheme;

import { createTheme } from '@mui/material';
import getPalette from '@/modules/theme/config/getPalette';
import components from '@/modules/theme/config/components';

const getTheme = (mode) => {
  return createTheme({
    components,
    palette: getPalette(mode),
  });
};

export default getTheme;

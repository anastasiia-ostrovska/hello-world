import { createTheme } from '@mui/material';
import { ThemeMode } from '@/modules/theme/types';
import getPalette from '@/modules/theme/config/getPalette';
import components from '@/modules/theme/config/components';

declare module '@mui/material/styles' {
  interface Palette {
    customBackground: {
      avatar: {
        purple: string;
        teal: string;
        orange: string;
        yellow: string;
        pink: string;
        green: string;
      };
      userCard: string;
    };
  }

  interface PaletteOptions {
    customBackground?: {
      avatar?: {
        purple?: string;
        teal?: string;
        orange?: string;
        yellow?: string;
        pink?: string;
        green?: string;
      };
      userCard?: string;
    };
  }
}

const getTheme = (mode: ThemeMode) => {
  return createTheme({
    components,
    palette: getPalette(mode),
  });
};

export default getTheme;

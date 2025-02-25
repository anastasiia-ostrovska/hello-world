import {
  green,
  orange,
  pink,
  purple,
  teal,
  yellow,
} from '@mui/material/colors';
import { PaletteOptions } from '@mui/material/styles';
import { ThemeMode } from '../model/types';

const avatarColors = {
  purple: purple[400],
  teal: teal[400],
  orange: orange[800],
  yellow: yellow[900],
  pink: pink[400],
  green: green[600],
} as const;

export type AvatarColors = typeof avatarColors;
type CustomBackground = {
  avatar: AvatarColors;
  userCard: string;
};

declare module '@mui/material/styles' {
  interface Palette {
    customBackground: CustomBackground;
  }

  interface PaletteOptions {
    customBackground?: Partial<CustomBackground>;
  }
}

const getPalette = (mode: ThemeMode): PaletteOptions => {
  return {
    mode,
    customBackground: {
      avatar: avatarColors,
      userCard: mode === ThemeMode.Dark ? '#1d1d1d' : '#fff',
    },
  };
};

export default getPalette;
export type AvatarColor = AvatarColors[keyof AvatarColors];

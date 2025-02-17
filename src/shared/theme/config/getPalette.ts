import { ThemeMode } from '@/modules/theme/types';
import {
  green,
  orange,
  pink,
  purple,
  teal,
  yellow,
} from '@mui/material/colors';
import { PaletteOptions } from '@mui/material/styles';

const avatarColors = {
  purple: purple[400],
  teal: teal[400],
  orange: orange[800],
  yellow: yellow[900],
  pink: pink[400],
  green: green[600],
} as const;

type AvatarColors = typeof avatarColors;
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

const getPalette = (mode: ThemeMode): PaletteOptions => ({
  mode,
  customBackground: {
    avatar: avatarColors,
    userCard: mode === ThemeMode.Dark ? '#1d1d1d' : '#fff',
  },
});

export type AvatarColor = AvatarColors[keyof AvatarColors];
export default getPalette;

import {
  green,
  orange,
  pink,
  purple,
  teal,
  yellow,
} from '@mui/material/colors';
import { ThemeMode } from '@/modules/theme/types';

const getPalette = (mode: ThemeMode) => ({
  mode,
  customBackground: {
    avatar: {
      purple: purple[400],
      teal: teal[400],
      orange: orange[800],
      yellow: yellow[900],
      pink: pink[400],
      green: green[600],
    },
    userCard: mode === ThemeMode.Dark ? '#1d1d1d' : '#fff',
  },
});

export default getPalette;

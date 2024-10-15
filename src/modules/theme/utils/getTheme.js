import { createTheme } from '@mui/material';
import {
  green,
  orange,
  pink,
  purple,
  teal,
  yellow,
} from '@mui/material/colors';

const getTheme = (mode) => {
  return createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '2rem',
          },
        },
      },
    },
    palette: {
      mode,
      background: {
        avatar: {
          purple: purple[400],
          teal: teal[400],
          orange: orange[800],
          yellow: yellow[900],
          pink: pink[400],
          green: green[600],
        },
        userCard: mode === 'dark' ? '#1e1e1e' : '#fff',
      },
    },
  });
};

export default getTheme;

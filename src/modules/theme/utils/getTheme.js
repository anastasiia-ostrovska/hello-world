import { createTheme } from '@mui/material';

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
    },
  });
};

export default getTheme;

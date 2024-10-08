import { createTheme } from '@mui/material';

const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
    },
  });
};

export default getTheme;

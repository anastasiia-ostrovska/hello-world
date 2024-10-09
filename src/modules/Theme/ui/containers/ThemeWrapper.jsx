import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getTheme } from '../../utils';
import { selectMode } from '../../store/themeSlice';

const ThemeWrapper = ({ children }) => {
  const mode = useSelector(selectMode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;

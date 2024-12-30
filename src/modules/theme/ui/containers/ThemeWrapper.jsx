import { CssBaseline, ThemeProvider } from '@mui/material';
import useAppTheme from '@/modules/theme/hooks/useAppTheme';

const ThemeWrapper = ({ children }) => {
  const theme = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;

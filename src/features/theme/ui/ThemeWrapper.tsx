import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import useAppTheme from '../model/useAppTheme';

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const theme = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import useTheme from '@/modules/theme/hooks/ui/useTheme';

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;

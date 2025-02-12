import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import useAppTheme from '@/modules/theme/hooks/ui/useAppTheme';

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

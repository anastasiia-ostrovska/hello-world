import { ReactNode } from 'react';
import { Styles } from '@/shared/types/mui-props';
import Paper from '@mui/material/Paper';

interface SectionWrapperProps {
  children: ReactNode;
  sx?: Styles;
}

const SectionWrapper = ({ children, sx = {} }: SectionWrapperProps) => {
  return (
    <Paper
      component="section"
      elevation={2}
      sx={{ display: 'flex', p: { xs: 1, sm: 2, md: 3 }, ...sx }}
    >
      {children}
    </Paper>
  );
};

export default SectionWrapper;

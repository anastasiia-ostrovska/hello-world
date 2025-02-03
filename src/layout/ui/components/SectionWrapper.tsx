import { PaperProps } from '@mui/material';
import { ReactNode } from 'react';
import Paper from '@mui/material/Paper';

interface SectionWrapperProps extends PaperProps {
  children: ReactNode;
}

const SectionWrapper = ({ children, ...props }: SectionWrapperProps) => {
  return (
    <Paper
      component="section"
      sx={{ display: 'flex', p: { xs: 1, sm: 2, md: 3 }, ...props }}
    >
      {children}
    </Paper>
  );
};

export default SectionWrapper;

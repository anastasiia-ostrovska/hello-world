import Paper from '@mui/material/Paper';

const SectionWrapper = ({ children, sx = {} }) => {
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

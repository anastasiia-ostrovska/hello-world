import Paper from '@mui/material/Paper';

const ContentBlock = ({ children, sx = {} }) => {
  return (
    <Paper elevation={2} sx={{ p: { xs: 1, sm: 2, md: 3 }, ...sx }}>
      {children}
    </Paper>
  );
};

export default ContentBlock;

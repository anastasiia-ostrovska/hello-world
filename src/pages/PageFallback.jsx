import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PageFallback = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      role="status"
      aria-label="Loading page"
    >
      <Typography sx={{ mt: 5, fontSize: { xs: 18, sm: 36, md: 48 } }}>
        Loading...
      </Typography>
      <CircularProgress size="15vw" />
    </Box>
  );
};

export default PageFallback;

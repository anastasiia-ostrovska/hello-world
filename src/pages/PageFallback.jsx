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
      <CircularProgress size="15vw" />
      <Typography sx={{ mt: 5, fontSize: { xs: 18, sm: 36, md: 48 } }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default PageFallback;

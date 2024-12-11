import { useMediaQueryType } from '@/shared/hooks';
import Delayed from '@/shared/components/Delayed';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';

const PageFallback = () => {
  const { isUpMD } = useMediaQueryType();

  const getPageLoaderSize = () => {
    if (isUpMD) return 80;
    return 60;
  };

  return (
    <Delayed>
      <Paper
        variant="outlined"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
        role="status"
        aria-label="Loading page"
      >
        <CircularProgress size={getPageLoaderSize()} />
      </Paper>
    </Delayed>
  );
};

export default PageFallback;

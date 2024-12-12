import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

const CircularLoaderContainer = ({
  containerVariant = 'outlined',
  containerSX = {},
  progressColor = 'primary',
  progressSize = 60,
}) => {
  return (
    <Paper
      variant={containerVariant}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        ...containerSX,
      }}
      role="status"
      aria-label="Loading page"
    >
      <CircularProgress size={progressSize} color={progressColor} />
    </Paper>
  );
};

export default CircularLoaderContainer;

import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import {
  CircularProgressColor,
  PaperVariant,
  ProgressSize,
  Styles,
} from '@/shared/types/mui-props';

interface CircularBlockProps {
  containerVariant: PaperVariant;
  containerSX: Styles;
  progressColor: CircularProgressColor;
  progressSize: ProgressSize;
}

const CircularBlock = ({
  containerVariant = 'outlined',
  containerSX = {},
  progressColor = 'primary',
  progressSize = 60,
}: Partial<CircularBlockProps>) => {
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

export default CircularBlock;

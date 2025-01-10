import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { CircularProgressProps, PaperProps } from '@mui/material';
import { Styles } from '@/shared/types/mui-props';

interface CircularBlockProps {
  containerVariant?: PaperProps['variant'];
  containerSX?: Styles;
  progressColor?: CircularProgressProps['color'];
  progressSize?: number | string;
}

const CircularBlock = ({
  containerVariant,
  containerSX,
  progressColor,
  progressSize,
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

CircularBlock.defaultProps = {
  containerVariant: 'outlined',
  containerSX: {},
  progressColor: 'primary',
  progressSize: 60,
};

export default CircularBlock;

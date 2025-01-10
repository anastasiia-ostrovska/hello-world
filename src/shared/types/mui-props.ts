import { SxProps, Theme } from '@mui/material/styles';
import { CircularProgressProps, PaperProps } from '@mui/material';

export type Styles = SxProps<Theme>;

export type PaperVariant = PaperProps['variant'];

export type CircularProgressColor = CircularProgressProps['color'];
export type ProgressSize = number | string;

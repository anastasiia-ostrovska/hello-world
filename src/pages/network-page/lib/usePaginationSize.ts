import { PaginationProps } from '@mui/material';
import { useMediaQueryState } from '@shared/mui';

enum PaginationSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export const usePaginationSize = (): PaginationProps['size'] => {
  const { isUpSM, isUpLG } = useMediaQueryState();
  if (isUpLG) return PaginationSize.Large;
  if (isUpSM) return PaginationSize.Medium;
  return PaginationSize.Small;
};

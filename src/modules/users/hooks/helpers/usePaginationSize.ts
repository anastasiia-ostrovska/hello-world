import { PaginationProps } from '@mui/material';
import { useMediaQueryState } from '@/shared/mui';

const usePaginationSize = (): PaginationProps['size'] => {
  const { isUpSM, isUpLG } = useMediaQueryState();

  if (isUpLG) return 'large';
  if (isUpSM) return 'medium';

  return 'small';
};

export default usePaginationSize;

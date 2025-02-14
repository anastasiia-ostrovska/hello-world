import { PaginationProps } from '@mui/material';
import { useMediaQueryType } from '@/shared/mui';

const usePaginationSize = (): PaginationProps['size'] => {
  const { isUpSM, isUpLG } = useMediaQueryType();

  if (isUpLG) return 'large';
  if (isUpSM) return 'medium';

  return 'small';
};

export default usePaginationSize;

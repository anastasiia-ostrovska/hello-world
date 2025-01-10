import useMediaQueryType from '@/shared/hooks/helpers/useMediaQueryType';
import { PaginationProps } from '@mui/material';

const usePaginationSize = (): PaginationProps['size'] => {
  const { isUpSM, isUpLG } = useMediaQueryType();

  if (isUpLG) return 'large';
  if (isUpSM) return 'medium';

  return 'small';
};

export default usePaginationSize;

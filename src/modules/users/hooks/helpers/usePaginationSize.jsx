import useMediaQueryType from '@/shared/hooks/useMediaQueryType';

const usePaginationSize = () => {
  const { isUpSM, isUpLG } = useMediaQueryType();

  if (isUpLG) return 'large';
  if (isUpSM) return 'medium';

  return 'small';
};

export default usePaginationSize;

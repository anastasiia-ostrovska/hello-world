import useMediaQueryType from '@/shared/hooks/useMediaQueryType';

const usePageFallbackProgressSize = () => {
  const { isUpMD } = useMediaQueryType();

  if (isUpMD) return 80;
  return 60;
};

export default usePageFallbackProgressSize;

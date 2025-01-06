import useMediaQueryType from '@/shared/hooks/useMediaQueryType';

const useCircularLoaderSize = () => {
  const { isUpMD } = useMediaQueryType();

  return isUpMD ? 80 : 60;
};

export default useCircularLoaderSize;

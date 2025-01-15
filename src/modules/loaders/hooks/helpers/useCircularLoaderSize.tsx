import useMediaQueryType from '@/shared/hooks/helpers/useMediaQueryType';

enum CircularLoaderSize {
  Small = 60,
  Medium = 80,
}

const useCircularLoaderSize = (): CircularLoaderSize => {
  const { isUpMD } = useMediaQueryType();

  return isUpMD ? CircularLoaderSize.Medium : CircularLoaderSize.Small;
};

export default useCircularLoaderSize;

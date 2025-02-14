import { useMediaQueryState } from '@/shared/mui';

enum CircularLoaderSize {
  Small = 60,
  Medium = 80,
}

const useCircularLoaderSize = (): CircularLoaderSize => {
  const { isUpMD } = useMediaQueryState();

  return isUpMD ? CircularLoaderSize.Medium : CircularLoaderSize.Small;
};

export default useCircularLoaderSize;

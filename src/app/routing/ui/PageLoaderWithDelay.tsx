import { useMediaQueryType } from '@/shared/mui';
import Delayed from '@/shared/ui/Delayed';
import PageLoader from './PageLoader';

const PAGE_LOADER_DELAY = 100;

enum CircularLoaderSize {
  Small = 60,
  Medium = 80,
}

const PageLoaderWithDelay = () => {
  const { isUpMD } = useMediaQueryType();
  const spinnerSize = isUpMD
    ? CircularLoaderSize.Medium
    : CircularLoaderSize.Small;

  return (
    <Delayed delay={PAGE_LOADER_DELAY}>
      <PageLoader spinnerSize={spinnerSize} />
    </Delayed>
  );
};

export default PageLoaderWithDelay;

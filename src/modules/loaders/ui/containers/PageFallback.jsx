import usePageFallbackProgressSize from '@/modules/loaders/hooks/usePageFallbackProgressSize';
import Delayed from '@/shared/components/Delayed';
import CircularLoaderContainer from '@/modules/loaders/ui/components/CircularLoaderContainer';

const PageFallback = () => {
  const size = usePageFallbackProgressSize();

  return (
    <Delayed>
      <CircularLoaderContainer progressSize={size} />
    </Delayed>
  );
};

export default PageFallback;

import usePageFallbackProgressSize from '@/modules/loaders/hooks/usePageFallbackProgressSize';
import Delayed from '@/shared/components/Delayed';
import CircularLoaderBlock from '@/modules/loaders/ui/components/CircularLoaderBlock';

const PageFallback = () => {
  const size = usePageFallbackProgressSize();

  return (
    <Delayed>
      <CircularLoaderBlock progressSize={size} />
    </Delayed>
  );
};

export default PageFallback;

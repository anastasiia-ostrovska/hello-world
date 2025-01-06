import useCircularLoaderSize from '@/modules/loaders/hooks/helpers/useCircularLoaderSize';
import Delayed from '@/shared/components/Delayed';
import CircularBlock from '@/modules/loaders/ui/components/CircularBlock';

const CircularBlockDelayed = (delay = 100) => {
  const size = useCircularLoaderSize();

  return (
    <Delayed delay={delay}>
      <CircularBlock progressSize={size} />
    </Delayed>
  );
};

export default CircularBlockDelayed;

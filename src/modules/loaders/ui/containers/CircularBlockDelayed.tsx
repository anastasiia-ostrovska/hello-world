import { DELAY } from '@/shared/constants/defaults';
import useCircularLoaderSize from '@/modules/loaders/hooks/helpers/useCircularLoaderSize';
import Delayed from '@/shared/components/Delayed';
import CircularBlock from '@/modules/loaders/ui/components/CircularBlock';

interface CircularBlockDelayedProps {
  delay?: number;
}

const CircularBlockDelayed = ({ delay }: CircularBlockDelayedProps) => {
  const size = useCircularLoaderSize();

  return (
    <Delayed delay={delay}>
      <CircularBlock progressSize={size} />
    </Delayed>
  );
};

CircularBlockDelayed.defaultProps = {
  delay: DELAY,
};

export default CircularBlockDelayed;

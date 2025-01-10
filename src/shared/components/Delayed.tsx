import { ReactNode } from 'react';
import { DELAY } from '@/shared/constants/defaults';
import useShowDelayedComponent from '@/shared/hooks/state/useShowDelayedComponent';

interface DelayedProps {
  delay?: number;
  children: ReactNode;
}

const Delayed = ({ delay = DELAY, children }: DelayedProps) => {
  const isShow = useShowDelayedComponent(delay);

  return isShow ? children : null;
};

export default Delayed;

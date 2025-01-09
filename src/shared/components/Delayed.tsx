import { ReactNode } from 'react';
import useShowDelayedComponent from '@/shared/hooks/state/useShowDelayedComponent';

interface DelayedProps {
  delay: number;
  children: ReactNode;
}

const Delayed = ({ delay, children }: DelayedProps) => {
  const isShow = useShowDelayedComponent(delay);

  return isShow ? children : null;
};

export default Delayed;

import { ReactNode } from 'react';
import useShowDelayed from '@/shared/hooks/state/useShowDelayed';

interface DelayedProps {
  delay: number;
  children: ReactNode;
}

const Delayed = ({ delay, children }: DelayedProps) => {
  const isShow = useShowDelayed(delay);

  return isShow ? children : null;
};

export default Delayed;

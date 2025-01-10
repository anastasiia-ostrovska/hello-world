import { useEffect, useState } from 'react';
import { DELAY } from '@/shared/constants/defaults';

const useShowDelayedComponent = (delay = DELAY): boolean => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isShow;
};

export default useShowDelayedComponent;

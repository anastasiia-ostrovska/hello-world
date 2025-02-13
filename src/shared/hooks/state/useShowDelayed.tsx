import { useEffect, useState } from 'react';

const useShowDelayed = (delay: number): boolean => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isShow;
};

export default useShowDelayed;

import { useEffect, useState } from 'react';

const Delayed = ({ delay = 300, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return show ? children : null;
};

export default Delayed;

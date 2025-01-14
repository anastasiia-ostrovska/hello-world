import { useLocation } from 'react-router-dom';

type IsActivePath = boolean;

const useIsActivePath = (path: string): IsActivePath => {
  const { pathname } = useLocation();

  return pathname.startsWith(path);
};

export default useIsActivePath;

import { useLocation } from 'react-router-dom';

const useIsActivePath = (path) => {
  const { pathname } = useLocation();

  return pathname.startsWith(path);
};

export default useIsActivePath;

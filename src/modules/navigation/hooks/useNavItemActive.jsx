import { useLocation } from 'react-router-dom';

const useNavItemActive = (path) => {
  const { pathname } = useLocation();

  return pathname.startsWith(path);
};

export default useNavItemActive;

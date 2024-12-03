import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const useNavbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const getIsActive = useCallback(
    (path) => {
      return pathname.startsWith(path);
    },
    [pathname]
  );

  const handleNavItemClick = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  return { getIsActive, handleNavItemClick };
};

export default useNavbar;

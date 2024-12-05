import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const useNavbar = () => {
  const navigate = useNavigate();

  const handleNavItemClick = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  return handleNavItemClick;
};

export default useNavbar;

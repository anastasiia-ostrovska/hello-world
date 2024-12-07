import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const useNavigationHandler = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (path) => {
      if (path) navigate(path);
    },
    [navigate]
  );

  return handleNavigate;
};

export default useNavigationHandler;

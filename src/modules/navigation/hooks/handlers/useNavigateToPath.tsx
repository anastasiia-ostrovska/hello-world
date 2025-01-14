import { NavigateToPathHandler } from '@/modules/navigation/types';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const useNavigateToPath = (): NavigateToPathHandler => {
  const navigate = useNavigate();

  return useCallback(
    (path) => {
      if (path) navigate(path);
    },
    [navigate]
  );
};

export default useNavigateToPath;

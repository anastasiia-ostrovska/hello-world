import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { PROFILE } from '@/routing/routing-paths';

const useUserCardClick = () => {
  const navigate = useNavigate();

  const handleUserCardClick = useCallback(
    (userId) => {
      navigate(`${PROFILE}/${userId}`);
    },
    [navigate]
  );

  return handleUserCardClick;
};

export default useUserCardClick;

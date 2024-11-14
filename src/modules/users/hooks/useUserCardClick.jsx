import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const useUserCardClick = () => {
  const navigate = useNavigate();

  const handleUserCardClick = useCallback(
    (userId) => {
      navigate(`/profile/${userId}`);
    },
    [navigate]
  );

  return handleUserCardClick;
};

export default useUserCardClick;

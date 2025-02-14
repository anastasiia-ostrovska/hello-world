import { UserId } from '@/modules/users/types';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { PROFILE } from '@/shared/router/routes';

export type UserCardClickHandler = (userId: UserId) => void;

const useUserCardClick = (): UserCardClickHandler => {
  const navigate = useNavigate();

  return useCallback(
    (userId) => {
      navigate(`${PROFILE}/${userId}`);
    },
    [navigate]
  );
};

export default useUserCardClick;

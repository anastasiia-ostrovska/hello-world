import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { ROUTES } from '@shared/router';
import { User } from '@shared/user';
import { FakeUser, UserCardClickHandler } from './types';
import { useGetUsersQuery } from '../api/usersApi';
import generateFakeUsers from './generateFakeUsers';
import useUsersQueryParams from './useUsersQueryParams';

interface UseUsersResult {
  users: User[] | FakeUser[];
  isLoading: boolean;
  handleUserCardClick: UserCardClickHandler;
}

const useUserList = (): UseUsersResult => {
  const { usersQueryCount, currentPage } = useUsersQueryParams();
  const { data, isLoading } = useGetUsersQuery({
    usersQueryCount,
    currentPage,
  });
  const navigate = useNavigate();

  const handleUserCardClick = useCallback(
    (userId: User['id']) => {
      navigate(`${ROUTES.PROFILE}/${userId}`);
    },
    [navigate]
  );

  const users = isLoading
    ? generateFakeUsers(usersQueryCount)
    : data?.items || [];

  return { users, isLoading, handleUserCardClick };
};

export default useUserList;

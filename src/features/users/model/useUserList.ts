import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { ROUTES } from '@shared/router';
import { User } from '@shared/user';
import { getErrorMessage } from '@shared/error';
import {
  addNotification,
  createErrorNotification,
} from '@features/notification';
import { useAppDispatch } from '@shared/redux';
import { FakeUser, UserCardClickHandler } from './types';
import { useGetUsersQuery } from '../api/usersApi';
import generateFakeUsers from './generateFakeUsers';
import useUsersQueryParams from './useUsersQueryParams';

interface UseUsersResult {
  users: User[] | FakeUser[];
  isLoading: boolean;
  isError: boolean;
  handleUserCardClick: UserCardClickHandler;
}

const useUserList = (): UseUsersResult => {
  const { usersQueryCount, currentPage } = useUsersQueryParams();
  const {
    data: usersData,
    isLoading,
    isError,
    error,
  } = useGetUsersQuery({
    usersQueryCount,
    currentPage,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      const getUsersErrorMessage = getErrorMessage();
      const { title, message } = getUsersErrorMessage(error);
      const usersErrorNotification = createErrorNotification({
        message,
        title,
      });

      dispatch(addNotification(usersErrorNotification));
    }
  }, [dispatch, error, isError]);

  const handleUserCardClick = useCallback(
    (userId: User['id']) => {
      navigate(`${ROUTES.PROFILE}/${userId}`);
    },
    [navigate]
  );

  const users =
    isLoading || isError
      ? generateFakeUsers(usersQueryCount)
      : usersData?.data?.items || [];

  return {
    users,
    isLoading,
    isError,
    handleUserCardClick,
  };
};

export default useUserList;

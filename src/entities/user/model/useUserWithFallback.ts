import { skipToken } from '@reduxjs/toolkit/query';
import { useUserByIdQuery } from '../api/userApi';
import { generateFakeUsers } from '../lib/generateFakeUsers';
import { UserWithInfo } from './types';

interface UserWithFallback {
  user: UserWithInfo;
  error: unknown;
  isError: boolean;
  isLoading: boolean;
}

export const useUserWithFallback = ({
  userId,
}: {
  userId: string;
}): UserWithFallback => {
  const { data, error, isError, isLoading } = useUserByIdQuery(
    userId ?? skipToken
  );
  const fakeUser = generateFakeUsers(1)[0];
  const user = data?.data || fakeUser;

  return { user, error, isError, isLoading };
};

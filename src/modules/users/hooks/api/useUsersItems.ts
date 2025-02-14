import { User } from '@/modules/users/types';
import { useMemo } from 'react';
import useUsers from '@/modules/users/hooks/api/useUsers';
import useUsersQueryParams from '@/modules/users/hooks/state/useUsersQueryParams';
import generateMockUsers from '@/modules/users/helpers/generateMockUsers';

interface UseUsersResult {
  users: User[];
  isLoading: boolean;
}

const useUsersItems = (): UseUsersResult => {
  const { data, isLoading } = useUsers();
  const { usersQueryCount } = useUsersQueryParams();

  const users = useMemo((): User[] => {
    if (isLoading) {
      return generateMockUsers(usersQueryCount);
    }
    return data?.items || [];
  }, [data, isLoading, usersQueryCount]);

  return { users, isLoading };
};

export default useUsersItems;

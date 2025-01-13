import { User } from '@/modules/users/types';
import { ResponseDataState } from '@/shared/types/response-data';
import { useMemo } from 'react';
import useUsers from '@/modules/users/hooks/api/useUsers';
import useUsersQueryParams from '@/modules/users/hooks/state/useUsersQueryParams';
import generateMockUsers from '@/modules/users/helpers/generateMockUsers';

const useUsersItems = (): ResponseDataState<User[]> => {
  const { data, isLoading } = useUsers();
  const { usersQueryCount } = useUsersQueryParams();

  const users = useMemo((): User[] => {
    if (isLoading) {
      return generateMockUsers(usersQueryCount);
    }
    return data?.items || [];
  }, [data, isLoading, usersQueryCount]);

  return { data: users, isLoading };
};

export default useUsersItems;

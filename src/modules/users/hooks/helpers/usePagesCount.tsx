import { useMemo } from 'react';
import useUsersQueryParams from '@/modules/users/hooks/state/useUsersQueryParams';
import useUsers from '@/modules/users/hooks/api/useUsers';
import getPagesCount from '@/modules/users/helpers/getPagesCount';

const usePagesCount = () => {
  const { usersQueryCount } = useUsersQueryParams();
  const { data, isLoading } = useUsers();

  const usersTotalCount = data?.totalCount;

  return useMemo(() => {
    if (!isLoading && usersTotalCount) {
      return getPagesCount(usersTotalCount, usersQueryCount);
    }

    return 1;
  }, [isLoading, usersQueryCount, usersTotalCount]);
};

export default usePagesCount;

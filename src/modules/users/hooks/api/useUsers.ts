import { UsersResponse } from '@/modules/users/types';
import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import useUsersQueryParams from '@/modules/users/hooks/state/useUsersQueryParams';

interface UseUsersReturn {
  data: UsersResponse | undefined;
  isLoading: boolean;
}

const useUsers = (): UseUsersReturn => {
  const { usersQueryCount, currentPage } = useUsersQueryParams();
  const { data, isLoading } = useGetUsersQuery({
    usersQueryCount,
    currentPage,
  });

  return { data, isLoading };
};

export default useUsers;

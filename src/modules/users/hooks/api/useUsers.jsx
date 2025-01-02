import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import useUsersQueryParams from '@/modules/users/hooks/state/useUsersQueryParams';

const useUsers = () => {
  const { usersQueryCount, currentPage } = useUsersQueryParams();
  const { data, isLoading } = useGetUsersQuery({
    usersQueryCount,
    currentPage,
  });

  return { data, isLoading };
};

export default useUsers;

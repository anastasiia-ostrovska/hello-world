import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import useUsersQueryParamsSelectors from '@/modules/users/hooks/useUsersQueryParamsSelectors';

const useUsers = () => {
  const { usersQueryCount, currentPage } = useUsersQueryParamsSelectors();
  const { data, isLoading } = useGetUsersQuery({
    usersQueryCount,
    currentPage,
  });

  return { data, isLoading };
};

export default useUsers;

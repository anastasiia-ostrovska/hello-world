import useUsers from '@/modules/users/hooks/useUsers';
import generateMockUsers from '@/modules/users/utils/generateMockUsers';
import useUsersQueryParamsSelectors from '@/modules/users/hooks/useUsersQueryParamsSelectors';

const useUsersItemsData = () => {
  const { data, isLoading } = useUsers();
  const { usersQueryCount } = useUsersQueryParamsSelectors();

  const users = isLoading
    ? generateMockUsers(usersQueryCount)
    : data?.items || [];

  return { users, isLoading };
};

export default useUsersItemsData;

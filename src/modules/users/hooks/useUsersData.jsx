import { useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectUsersQueryCount,
} from '@/modules/users/store/usersSlice';
import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import generateMockUsers from '@/modules/users/utils/generateMockUsers';

const useUsersData = () => {
  const usersQueryCount = useSelector(selectUsersQueryCount);
  const currentPage = useSelector(selectCurrentPage);

  const { data, isLoading } = useGetUsersQuery({
    usersQueryCount,
    currentPage,
  });

  const users = isLoading
    ? generateMockUsers(usersQueryCount)
    : data?.items || [];

  return { users, isLoading };
};

export default useUsersData;

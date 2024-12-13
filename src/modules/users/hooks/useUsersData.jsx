import { useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectUsersQueryCount,
} from '@/modules/users/store/usersSlice';
import { useGetUsersQuery } from '@/modules/users/store/usersApi';

const useUsersData = () => {
  const usersQueryCount = useSelector(selectUsersQueryCount);
  const currentPage = useSelector(selectCurrentPage);

  const { data, isLoading } = useGetUsersQuery({
    usersQueryCount,
    currentPage,
  });

  return { usersData: data?.items, isLoading };
};

export default useUsersData;

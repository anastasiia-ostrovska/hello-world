import { useAppSelector } from '@/shared/redux';
import { selectCurrentPage, selectUsersQueryCount } from './usersSlice';
import { UsersQueryParams } from './types';

const useUsersQueryParams = (): UsersQueryParams => {
  const usersQueryCount = useAppSelector(selectUsersQueryCount);
  const currentPage = useAppSelector(selectCurrentPage);

  return { usersQueryCount, currentPage };
};

export default useUsersQueryParams;

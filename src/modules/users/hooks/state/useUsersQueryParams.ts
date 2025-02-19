import { UsersQueryParams } from '@/modules/users/types';
import { useAppSelector } from '@/shared/redux';
import {
  selectCurrentPage,
  selectUsersQueryCount,
} from '@/modules/users/store/usersSlice';

const useUsersQueryParams = (): UsersQueryParams => {
  const usersQueryCount = useAppSelector(selectUsersQueryCount);
  const currentPage = useAppSelector(selectCurrentPage);

  return { usersQueryCount, currentPage };
};

export default useUsersQueryParams;

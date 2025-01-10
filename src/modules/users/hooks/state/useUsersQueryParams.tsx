import { useAppSelector } from '@/shared/hooks/redux';
import {
  selectCurrentPage,
  selectUsersQueryCount,
} from '@/modules/users/store/usersSlice';
import { UsersQueryParamsState } from '@/modules/users/types';

const useUsersQueryParams = (): UsersQueryParamsState => {
  const usersQueryCount = useAppSelector(selectUsersQueryCount);
  const currentPage = useAppSelector(selectCurrentPage);

  return { usersQueryCount, currentPage };
};

export default useUsersQueryParams;

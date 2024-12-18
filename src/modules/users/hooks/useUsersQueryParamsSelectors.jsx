import { useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectUsersQueryCount,
} from '@/modules/users/store/usersSlice';

const useUsersQueryParamsSelectors = () => {
  const usersQueryCount = useSelector(selectUsersQueryCount);
  const currentPage = useSelector(selectCurrentPage);

  return { usersQueryCount, currentPage };
};

export default useUsersQueryParamsSelectors;

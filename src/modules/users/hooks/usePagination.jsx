import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '@/modules/users/store/usersSlice';
import useUsers from '@/modules/users/hooks/useUsers';
import useUsersQueryParamsSelectors from '@/modules/users/hooks/useUsersQueryParamsSelectors';

const usePagination = () => {
  const { usersQueryCount, currentPage } = useUsersQueryParamsSelectors();
  const { data, isLoading } = useUsers();
  const dispatch = useDispatch();

  const usersTotalCount = data?.totalCount;

  const pagesCount = useMemo(() => {
    if (!isLoading && usersTotalCount) {
      return Math.ceil(usersTotalCount / usersQueryCount);
    }

    return 1;
  }, [isLoading, usersQueryCount, usersTotalCount]);

  const handlePageChange = useCallback(
    (event, page) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  return {
    currentPage,
    pagesCount,
    handlePageChange,
    isLoading,
  };
};

export default usePagination;

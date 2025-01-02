import useUsersQueryParams from '@/modules/users/hooks/state/useUsersQueryParams';
import usePaginationSize from '@/modules/users/hooks/helpers/usePaginationSize';
import usePageChange from '@/modules/users/hooks/handlers/usePageChange';
import usePagesCount from '@/modules/users/hooks/helpers/usePagesCount';

const usePagination = () => {
  const { currentPage } = useUsersQueryParams();
  const pagesCount = usePagesCount();
  const handlePageChange = usePageChange();
  const size = usePaginationSize();

  return {
    size,
    currentPage,
    pagesCount,
    handlePageChange,
  };
};

export default usePagination;

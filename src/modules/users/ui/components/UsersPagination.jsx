import usePaginationSize from '@/modules/users/hooks/usePaginationSize';
import usePagination from '@/modules/users/hooks/usePagination';
import Pagination from '@mui/material/Pagination';

const UsersPagination = () => {
  const size = usePaginationSize();
  const {
    currentPage: page,
    pagesCount: count,
    handlePageChange,
  } = usePagination();

  return (
    <Pagination
      size={size}
      count={count}
      page={page}
      onChange={handlePageChange}
    />
  );
};

export default UsersPagination;

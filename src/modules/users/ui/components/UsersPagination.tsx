import usePagination from '@/modules/users/hooks/ui/usePagination';
import Pagination from '@mui/material/Pagination';

const UsersPagination = () => {
  const { size, pagesCount, currentPage, handlePageChange } = usePagination();

  return (
    <Pagination
      size={size}
      count={pagesCount}
      page={currentPage}
      onChange={handlePageChange}
    />
  );
};

export default UsersPagination;

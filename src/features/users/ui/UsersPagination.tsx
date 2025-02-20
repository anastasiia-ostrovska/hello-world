import { ReactElement } from 'react';
import { SkeletonWrapper } from '@/modules/loaders';
import Pagination from '@mui/material/Pagination';
import useUsersPagination from '../model/useUsersPagination';

interface UsersPaginationLayoutProps {
  isLoading: boolean;
  pagination: ReactElement;
}

const UsersPaginationLayout = ({
  isLoading,
  pagination,
}: UsersPaginationLayoutProps) => {
  return (
    <SkeletonWrapper
      isLoading={isLoading}
      element={pagination}
      sx={{ borderRadius: '0.5rem' }}
    />
  );
};

const UsersPagination = () => {
  const { isLoading, size, pagesCount, currentPage, handlePageChange } =
    useUsersPagination();

  return (
    <UsersPaginationLayout
      isLoading={isLoading}
      pagination={
        <Pagination
          size={size}
          count={pagesCount}
          page={currentPage}
          onChange={handlePageChange}
        />
      }
    />
  );
};

export default UsersPagination;

import { ReactElement } from 'react';
import { SkeletonWrapper } from '@/shared/ui/SkeletonLoaders';
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

  if (pagesCount <= 1) return null;

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

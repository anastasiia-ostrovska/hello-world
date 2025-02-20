import { ChangeEvent } from 'react';
import { PaginationProps } from '@mui/material';
import { useMediaQueryState } from '@/shared/mui';
import { useAppDispatch } from '@/shared/redux';
import { useGetUsersQuery } from '../api/usersApi';
import { setCurrentPage } from './usersSlice';
import { UsersQueryParams } from './types';
import useUsersQueryParams from './useUsersQueryParams';

interface GetPagesCountParams {
  isLoading: boolean;
  itemsPerPage: number;
  totalCount?: number;
}

const getPagesCount = ({
  isLoading,
  itemsPerPage,
  totalCount = 0,
}: GetPagesCountParams): number => {
  return isLoading ? 10 : Math.ceil(totalCount / itemsPerPage);
};

enum PaginationSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

const usePaginationSize = (): PaginationProps['size'] => {
  const { isUpSM, isUpLG } = useMediaQueryState();
  if (isUpLG) return PaginationSize.Large;
  if (isUpSM) return PaginationSize.Medium;
  return PaginationSize.Small;
};

type PageChangeHandler = (event: ChangeEvent<unknown>, page: number) => void;

interface UsersPaginationProps {
  isLoading: boolean;
  size: PaginationProps['size'];
  currentPage: UsersQueryParams['currentPage'];
  pagesCount: number;
  handlePageChange: PageChangeHandler;
}

const usePagination = (): UsersPaginationProps => {
  const dispatch = useAppDispatch();
  const { usersQueryCount, currentPage } = useUsersQueryParams();
  const { data, isLoading } = useGetUsersQuery({
    usersQueryCount,
    currentPage,
  });

  const size = usePaginationSize();

  const usersTotalCount = data?.totalCount ?? 0;
  const pagesCount = getPagesCount({
    isLoading,
    totalCount: usersTotalCount,
    itemsPerPage: usersQueryCount,
  });

  const handlePageChange: PageChangeHandler = (_, page) => {
    if (page !== currentPage) {
      dispatch(setCurrentPage(page));
    }
  };

  return {
    isLoading,
    size,
    currentPage,
    pagesCount,
    handlePageChange,
  };
};

export default usePagination;

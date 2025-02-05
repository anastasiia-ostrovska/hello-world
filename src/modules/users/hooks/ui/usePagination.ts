import { PaginationProps } from '@mui/material';
import { UsersQueryParams } from '@/modules/users/types';
import { PagesCount } from '@/modules/users/helpers/getPagesCount';
import useUsersQueryParams from '@/modules/users/hooks/state/useUsersQueryParams';
import usePaginationSize from '@/modules/users/hooks/helpers/usePaginationSize';
import usePageChange, {
  PageChangeHandler,
} from '@/modules/users/hooks/handlers/usePageChange';
import usePagesCount from '@/modules/users/hooks/helpers/usePagesCount';

interface UsersPaginationProps {
  size: PaginationProps['size'];
  currentPage: UsersQueryParams['currentPage'];
  pagesCount: PagesCount;
  handlePageChange: PageChangeHandler;
}

const usePagination = (): UsersPaginationProps => {
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

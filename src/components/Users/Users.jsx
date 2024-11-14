import { useState } from 'react';
import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import useCurrentPage from '@/modules/users/hooks/useCurrentPage';
import getPagesCount from '@/modules/users/utils/getPagesCount';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import UserCardsList from '@/modules/users/ui/containers/UserCardsList';
import Pagination from '@mui/material/Pagination';

const Users = () => {
  const [usersPerPageCount] = useState(8);
  const [currentPage, handlePageChange] = useCurrentPage(1);

  const { data: users, isLoading } = useGetUsersQuery({
    usersPerPageCount,
    currentPage,
  });

  if (!isLoading) {
    return (
      <div>
        <Pagination
          count={getPagesCount(users.totalCount, usersPerPageCount)}
          page={currentPage}
          onChange={handlePageChange}
        />
        <UserCardsList users={users.items} />
      </div>
    );
  }

  return <LinearPreloader />;
};

export default Users;

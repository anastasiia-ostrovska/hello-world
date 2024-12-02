import { useState } from 'react';
import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import useCurrentPage from '@/modules/users/hooks/useCurrentPage';
import getPagesCount from '@/modules/users/utils/getPagesCount';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import UserCardsList from '@/modules/users/ui/containers/UserCardsList';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Users = () => {
  const [usersPerPageCount] = useState(8);
  const [currentPage, handlePageChange] = useCurrentPage(1);

  const { data: users, isLoading } = useGetUsersQuery({
    usersPerPageCount,
    currentPage,
  });

  if (!isLoading) {
    return (
      <Stack
        spacing={2}
        sx={{ alignItems: 'center', backgroundColor: 'white' }}
      >
        <Pagination
          count={getPagesCount(users.totalCount, usersPerPageCount)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ p: 2 }}
        />
        <UserCardsList users={users.items} />
      </Stack>
    );
  }

  return <LinearPreloader />;
};

export default Users;

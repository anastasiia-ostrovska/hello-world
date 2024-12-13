import { useState } from 'react';
import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import useCurrentPage from '@/modules/users/hooks/useCurrentPage';
import getPagesCount from '@/modules/users/utils/getPagesCount';
import UserCardsList from '@/modules/users/ui/components/UserCardsList';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Users = () => {
  const [usersQueryCount] = useState(2);
  const [currentPage, handlePageChange] = useCurrentPage(1);

  // xs :

  const { data: users, isLoading } = useGetUsersQuery({
    usersQueryCount,
    currentPage,
  });

  if (!isLoading) {
    return (
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <Pagination
          count={getPagesCount(users.totalCount, usersQueryCount)}
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

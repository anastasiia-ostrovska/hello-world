import { useState } from 'react';
import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import useUserCardClick from '@/modules/users/hooks/useUserCardClick';
import useCurrentPage from '@/modules/users/hooks/useCurrentPage';
import Grid2 from '@mui/material/Grid2';
import UserCard from '@/modules/users/ui/containers/UserCard';

const UserCardsList = () => {
  const handleUserCardClick = useUserCardClick();

  const [usersPerPageCount] = useState(12);
  const [
    currentPage,
    // handlePageChange
  ] = useCurrentPage(1);

  const { data, isLoading } = useGetUsersQuery({
    usersPerPageCount,
    currentPage,
  });

  const users = data?.items;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid2
      container
      component="ul"
      rowSpacing={2}
      aria-label="List of users"
      columnSpacing={{ xs: 1, md: 2 }}
      sx={{ width: '100%', m: 0, p: 0 }}
    >
      {users.map((user) => (
        <Grid2 key={user.id} component="li" size={{ xs: 6, sm: 4, md: 3 }}>
          <UserCard
            data={user}
            avatarSize={60}
            backgroundImageSize={60}
            onUserCardClick={handleUserCardClick}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default UserCardsList;

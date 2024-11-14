import useUserCardClick from '@/modules/users/hooks/useUserCardClick';
import Grid2 from '@mui/material/Grid2';
import UserCard from '@/modules/users/ui/containers/UserCard';

const UserCardsList = ({ users }) => {
  const handleUserCardClick = useUserCardClick();

  return (
    <Grid2
      container
      component="ul"
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: '100%' }}
    >
      {users.map((user) => (
        <Grid2
          key={user.id}
          size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
          component="li"
        >
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

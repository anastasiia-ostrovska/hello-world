import useUserCardClick from '@/modules/users/hooks/useUserCardClick';
import Grid2 from '@mui/material/Grid2';
import UserCard from '@/modules/users/ui/components/UserCard';

const UserCardsList = ({ users }) => {
  const handleUserCardClick = useUserCardClick();

  return (
    <Grid2
      container
      component="ul"
      rowSpacing={2}
      columnSpacing={{ xs: 1, md: 2 }}
      sx={{ width: '100%', m: 0, p: 0 }}
    >
      {users.map((user) => (
        <Grid2 key={user.id} component="li" size={{ xs: 6, sm: 4, md: 3 }}>
          <UserCard
            userData={user}
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

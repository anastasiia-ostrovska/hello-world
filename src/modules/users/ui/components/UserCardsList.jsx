import Grid2 from '@mui/material/Grid2';
import UserCard from '@/modules/users/ui/components/UserCard';

const UserCardsList = ({ users, isLoading, handleUserCardClick }) => {
  return (
    <Grid2
      container
      component="ul"
      rowSpacing={2}
      columnSpacing={{ xs: 1, md: 2 }}
      sx={{ width: '100%', m: 0, p: 0 }}
    >
      {users.map((user) => {
        const { id, name, followed, photos } = user;
        const avatarSrc = photos?.small;
        const backgroundSrc = photos?.large;

        return (
          <Grid2 key={id} component="li" size={{ xs: 6, md: 4, lg: 3 }}>
            <UserCard
              isLoading={isLoading}
              userId={id}
              userName={name}
              jobTitle="Mocked job title"
              country="Mocked country"
              isFollowed={followed}
              avatarSrc={avatarSrc}
              backgroundSrc={backgroundSrc}
              avatarSize={100}
              backgroundImageSize={80}
              onUserCardClick={handleUserCardClick}
            />
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default UserCardsList;

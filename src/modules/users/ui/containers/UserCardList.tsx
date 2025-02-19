import Grid2 from '@mui/material/Grid2';
import { UserCard } from '@/features/users';
import useUsersItems from '@/modules/users/hooks/api/useUsersItems';
import useUserCardClick from '@/modules/users/hooks/handlers/useUserCardClick';

const UserCardList = () => {
  const { users, isLoading } = useUsersItems();
  const handleUserCardClick = useUserCardClick();

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
              jobTitle="Fake job title"
              country="Fake country"
              isFollowed={followed}
              avatarSrc={avatarSrc}
              bgImageSrc={backgroundSrc}
              avatarSize={100}
              bgImageHeight={80}
              onUserCardClick={handleUserCardClick}
            />
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default UserCardList;

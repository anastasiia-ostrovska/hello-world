import { ReactElement } from 'react';
import Grid2 from '@mui/material/Grid2';
import UserCard from './UserCard';
import useUserList from '../model/useUserList';

const UserCardListLayout = ({ cards }: { cards: ReactElement[] }) => {
  return (
    <Grid2
      container
      component="ul"
      rowSpacing={2}
      columnSpacing={{ xs: 1, md: 2 }}
      sx={{ width: '100%', m: 0, p: 0 }}
    >
      {cards}
    </Grid2>
  );
};

const CardWrapper = ({ card }: { card: ReactElement }) => {
  return (
    <Grid2 component="li" size={{ xs: 6, md: 4, lg: 3 }}>
      {card}
    </Grid2>
  );
};

const UserCardList = () => {
  const { users, isLoading, handleUserCardClick } = useUserList();

  return (
    <UserCardListLayout
      cards={users.map((user) => {
        const {
          id,
          name,
          followed,
          photos: { avatar, background },
          job,
          country,
        } = user;

        return (
          <CardWrapper
            key={id}
            card={
              <UserCard
                isLoading={isLoading}
                userId={id}
                userName={name}
                jobTitle={job}
                country={country}
                isFollowed={followed}
                avatarSrc={avatar}
                bgImageSrc={background}
                avatarSize={100}
                bgImageHeight={80}
                onUserCardClick={handleUserCardClick}
              />
            }
          />
        );
      })}
    />
  );
};

export default UserCardList;

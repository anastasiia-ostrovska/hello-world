import { ModeSwitcher } from '@/modules/mode-switcher';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import UserCard from '@/modules/users/ui/containers/UserCard';
import UserAvatar from '@/modules/users/ui/components/UserAvatar';
import UserBackgroundImage from '@/modules/users/ui/components/UserBackgroundImage';

import UserPhoto from '@assets/user.svg';
import UserAvatarWithBackground from '@/modules/users/ui/containers/UserAvatarWithBackground';

const Components = () => {
  const onFollowClick = (id) => alert(`Follow ${id} clicked!`);
  const onUnfollowClick = (id) => alert(`Unfollow ${id} clicked!`);
  const onUserCardClick = (id) => alert(`User card ${id} clicked!`);

  return (
    <Stack
      spacing={2}
      direction="row"
      useFlexGap
      sx={{ flexWrap: 'wrap', p: 2 }}
    >
      <Box sx={{ width: 50, height: 50 }}>
        <ModeSwitcher />
      </Box>
      <Stack spacing={1} direction="row" useFlexGap>
        <UserAvatar src={UserPhoto} name="Some Name" />
        <UserAvatar name="Some Name" size={200} />
        <UserAvatar name="john doe" size={100} />
        <UserAvatar name="Nana" size={30} />
        <UserAvatar name="" size={30} />
      </Stack>
      <UserBackgroundImage
        height="200px"
        src="https://uploads.sitepoint.com/wp-content/uploads/2016/05/1689772525css-object-fit.jpg"
      />
      <Box sx={{ width: 500, borderRadius: 15 }}>
        <UserBackgroundImage height="200px" />
      </Box>
      <Box sx={{ width: 150, borderRadius: 5 }}>
        <UserBackgroundImage height="200px" />
      </Box>

      <Box
        sx={{
          width: '100%',
          height: 500,
          borderRadius: 10,
          backgroundColor: 'white',
        }}
      >
        <UserAvatarWithBackground
          name="Anna"
          avatarSize={150}
          backgroundImageSize={200}
          avatarPosition="left"
          avatarBorderColor="white"
          backgroundSrc="https://images.squarespace-cdn.com/content/v1/5d777de8109c315fd22faf3a/1652899582924-FPWXES6GG7EGOQSRDE16/unsplash-image-pQMM63GE7fo.jpg?format=2500w"
        />
      </Box>
      <Box
        sx={{
          width: 300,
          borderRadius: 5,
          height: 300,
          backgroundColor: 'white',
        }}
      >
        <UserAvatarWithBackground
          name="Janine Goo"
          avatarSize={120}
          backgroundImageSize={100}
          avatarSrc="https://everyone.plos.org/wp-content/uploads/sites/5/2021/02/kirsten-scaled-e1613041313402-982x1024.jpg"
          avatarBorderColor="white"
        />
      </Box>
      <Box
        sx={{
          width: 250,
          borderRadius: 2,
          height: 150,
          backgroundColor: 'white',
        }}
      >
        <UserAvatarWithBackground
          name="Valery T"
          avatarSize={60}
          backgroundImageSize={60}
        />
      </Box>
      <Grid2
        component="ul"
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ width: '100%' }}
      >
        <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} component="li">
          <UserCard
            name="Valery J"
            jobTitle="Architect"
            avatarSize={60}
            backgroundImageSize={60}
            backgroundSrc="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"
            isFollowed={false}
            onFollowClick={onFollowClick}
            onUnfollowClick={onUnfollowClick}
            onUserCardClick={onUserCardClick}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} component="li">
          <UserCard
            name="K M"
            avatarSize={60}
            backgroundImageSize={60}
            isFollowed
            onFollowClick={onFollowClick}
            onUnfollowClick={onUnfollowClick}
            onUserCardClick={onUserCardClick}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} component="li">
          <UserCard
            name="L S"
            jobTitle="Driver"
            avatarSize={60}
            backgroundImageSize={60}
            isFollowed={false}
            onFollowClick={onFollowClick}
            onUnfollowClick={onUnfollowClick}
            onUserCardClick={onUserCardClick}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} component="li">
          <UserCard
            name="bd"
            avatarSize={60}
            backgroundImageSize={60}
            backgroundSrc="data:image/jpeg;base64,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"
            isFollowed
            onFollowClick={onFollowClick}
            onUnfollowClick={onUnfollowClick}
            onUserCardClick={onUserCardClick}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} component="li">
          <UserCard
            name="Valery J"
            jobTitle="Architect"
            avatarSize={60}
            backgroundImageSize={60}
            backgroundSrc="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"
            isFollowed={false}
            onFollowClick={onFollowClick}
            onUnfollowClick={onUnfollowClick}
            onUserCardClick={onUserCardClick}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} component="li">
          <UserCard
            name="K M"
            avatarSize={60}
            backgroundImageSize={60}
            isFollowed
            onFollowClick={onFollowClick}
            onUnfollowClick={onUnfollowClick}
            onUserCardClick={onUserCardClick}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} component="li">
          <UserCard
            name="L S"
            jobTitle="Driver"
            avatarSize={60}
            backgroundImageSize={60}
            isFollowed={false}
            onFollowClick={onFollowClick}
            onUnfollowClick={onUnfollowClick}
            onUserCardClick={onUserCardClick}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} component="li">
          <UserCard
            name="bd"
            avatarSize={60}
            backgroundImageSize={60}
            backgroundSrc="data:image/jpeg;base64,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"
            isFollowed
            onFollowClick={onFollowClick}
            onUnfollowClick={onUnfollowClick}
            onUserCardClick={onUserCardClick}
          />
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default Components;

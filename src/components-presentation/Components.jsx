import { ModeSwitcher } from '@/modules/mode-switcher';
import {
  MAIN_NAVIGATION,
  PROFILE_NAVIGATION,
  TOP_NAVIGATION,
} from '@/modules/navigation/constants/navItemsData';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import UserAvatar from '@/modules/users/ui/components/UserAvatar';
import UserBackgroundImage from '@/modules/users/ui/components/UserBackgroundImage';

import UserPhoto from '@assets/user.svg';
import UserAvatarWithBackground from '@/modules/users/ui/containers/UserAvatarWithBackground';
import TopNavbar from '@/modules/navigation/ui/containers/TopNavbar';
import MainNavbar from '@/modules/navigation/ui/containers/MainNavbar';
import ProfileNavbar from '@/modules/navigation/ui/containers/ProfileNavbar';

const Components = () => {
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
      <Box>
        <TopNavbar navItems={TOP_NAVIGATION}>
          <ProfileNavbar navItems={PROFILE_NAVIGATION} />
        </TopNavbar>
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
      <MainNavbar navItems={MAIN_NAVIGATION} />
    </Stack>
  );
};

export default Components;

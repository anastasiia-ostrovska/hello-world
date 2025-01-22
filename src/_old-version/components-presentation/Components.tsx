import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import UserAvatar from '@/modules/users/ui/components/UserAvatar';
import UserBackgroundImage from '@/modules/users/ui/components/UserBackgroundImage';

import UserAvatarWithBackground from '@/modules/users/ui/containers/UserAvatarWithBackground';
import { ModeSwitcher } from '@/modules/theme';
import { LogInForm } from '@/modules/auth';

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
        <UserAvatar src={null} userName="Some Name" size={200} />
        <UserAvatar src={null} userName="john doe" size={100} />
        <UserAvatar src={null} userName="Nana" size={30} />
        <UserAvatar src={null} userName="" size={30} />
      </Stack>
      <UserBackgroundImage
        size={200}
        src="https://uploads.sitepoint.com/wp-content/uploads/2016/05/1689772525css-object-fit.jpg"
      />
      <Box sx={{ width: 500, borderRadius: 15 }}>
        <UserBackgroundImage size={200} src={null} />
      </Box>
      <Box sx={{ width: 150, borderRadius: 5 }}>
        <UserBackgroundImage size={200} src={null} />
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
          userName="Anna"
          avatarSize={150}
          avatarSrc={null}
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
          userName="Janine Goo"
          backgroundSrc={null}
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
          userName="Valery T"
          avatarSize={60}
          backgroundImageSize={60}
          avatarSrc={null}
          backgroundSrc={null}
        />
      </Box>
      <LogInForm />
    </Stack>
  );
};

export default Components;

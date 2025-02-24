import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { AvatarWithBgImage, UserAvatar } from '@/features/users';
import { ModeSwitcher } from '@/features/theme';
import { LogInForm } from '@/features/login';

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
      <Box
        sx={{
          width: '100%',
          height: 500,
          borderRadius: 10,
          backgroundColor: 'white',
        }}
      >
        <AvatarWithBgImage
          userName="Anna"
          avatarSize={150}
          avatarSrc={null}
          bgImageHeight={200}
          avatarPosition="left"
          avatarBorderColor="white"
          bgImageSrc="https://images.squarespace-cdn.com/content/v1/5d777de8109c315fd22faf3a/1652899582924-FPWXES6GG7EGOQSRDE16/unsplash-image-pQMM63GE7fo.jpg?format=2500w"
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
        <AvatarWithBgImage
          userName="Janine Goo"
          bgImageSrc={null}
          avatarSize={120}
          bgImageHeight={100}
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
        <AvatarWithBgImage
          userName="Valery T"
          avatarSize={60}
          bgImageHeight={60}
          avatarSrc={null}
          bgImageSrc={null}
        />
      </Box>
      <LogInForm />
    </Stack>
  );
};

export default Components;

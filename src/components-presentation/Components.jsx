import { ModeSwitcher } from '@/modules/mode-switcher';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import UserCard from '@/modules/users/ui/containers/UserCard';
import UserAvatar from '@/modules/users/ui/components/UserAvatar';
import UserBackgroundImage from '@/modules/users/ui/components/UserBackgroundImage';

import UserPhoto from '@assets/user.svg';

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
      <UserCard />
    </Stack>
  );
};

export default Components;

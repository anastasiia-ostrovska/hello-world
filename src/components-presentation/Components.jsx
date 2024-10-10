import { ModeSwitcher } from '@/modules/mode-switcher';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import UserCard from '@/modules/users/ui/containers/UserCard';
import UserAvatar from '@/modules/users/ui/components/UserAvatar';

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
        <Box sx={{ width: 100, height: 100 }}>
          <UserAvatar src={UserPhoto} name="Some Name" />
        </Box>
        <Box sx={{ width: 100, height: 100 }}>
          <UserAvatar name="Some Name" />
        </Box>
        <Box sx={{ width: 100, height: 100 }}>
          <UserAvatar name="john doe" />
        </Box>
        <Box sx={{ width: 100, height: 100 }}>
          <UserAvatar name="Nana" />
        </Box>
        <Box sx={{ width: 100, height: 100 }}>
          <UserAvatar name="" />
        </Box>
      </Stack>
      <UserCard />
    </Stack>
  );
};

export default Components;

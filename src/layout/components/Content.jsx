import { Outlet } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const Content = () => {
  return (
    <Stack
      component="main"
      spacing={{ xs: 1, md: 2 }}
      sx={{
        flexGrow: 1,
        height: '100%',
        marginLeft: { md: '204px' },
      }}
    >
      <Outlet />
    </Stack>
  );
};

export default Content;

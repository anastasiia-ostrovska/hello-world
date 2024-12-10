import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

const Content = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        marginLeft: { md: '204px' },
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Content;

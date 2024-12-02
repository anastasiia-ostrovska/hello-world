import { Outlet } from 'react-router-dom';
import { useMediaQueryType } from '@/shared/hooks';
import { MainNavbar } from '@/modules/navigation';
import Header from '@components/Home/Header/Header';
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Grid2';
import Box from '@mui/material/Box';

const Layout = () => {
  const { isUpSM } = useMediaQueryType();

  return (
    <Stack spacing={9}>
      <Header />
      {isUpSM ? (
        <Grid2
          container
          spacing={3}
          sx={{
            position: 'relative',
            px: { sm: 3, md: '10%', lg: '15%' },
          }}
        >
          <Grid2 size={3}>
            <MainNavbar />
          </Grid2>
          <Grid2 size={9}>
            <Box component="main">
              <Outlet />
            </Box>
          </Grid2>
        </Grid2>
      ) : (
        <Stack>
          <Box component="main" sx={{ mb: 9, px: 2 }}>
            <Outlet />
          </Box>
          <MainNavbar />
        </Stack>
      )}
    </Stack>
  );
};

export default Layout;

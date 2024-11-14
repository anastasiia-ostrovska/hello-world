import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Header from '@components/Home/Header/Header';
import Navigation from '@components/Home/Navigation/Navigation';
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Grid2';
import Box from '@mui/material/Box';

const Layout = () => {
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Stack spacing={9}>
      <Header />
      {isUpSM ? (
        <Grid2 container spacing={3} sx={{ position: 'relative', px: '15%' }}>
          <Grid2 size={3}>
            <Navigation />
          </Grid2>
          <Grid2 size={9}>
            <Box component="main">
              <Outlet />
            </Box>
          </Grid2>
        </Grid2>
      ) : (
        <Stack>
          <Box component="main" sx={{ mb: 9 }}>
            <Outlet />
          </Box>
          <Navigation />
        </Stack>
      )}
    </Stack>
  );
};

export default Layout;

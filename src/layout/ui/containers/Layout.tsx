import Stack from '@mui/material/Stack';
import Header from '@/layout/ui/containers/Header';
import Content from '@/layout/ui/containers/Content';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <Stack
      sx={{
        px: { xs: 1, sm: 8, lg: '10%', xl: '15%' },
        pt: { xs: 8, md: 9 },
        pb: { xs: 8, md: 2 },
        minHeight: 'inherit',
      }}
    >
      <Header />
      <Stack sx={{ flexGrow: 1 }}>
        <Content />
        <Navigation />
      </Stack>
    </Stack>
  );
};

export default Layout;

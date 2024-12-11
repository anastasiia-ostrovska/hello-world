import Stack from '@mui/material/Stack';
import Navigation from '@/layout/components/Navigation';
import Content from '@/layout/components/Content';
import Header from '@/layout/components/Header';

const Layout = () => {
  return (
    <Stack sx={{ height: '100vh', px: { xs: 2, sm: 4, lg: '10%', xl: '15%' } }}>
      <Header />
      <Stack
        direction="row"
        sx={{
          height: 'inherit',
          pt: 10,
          pb: { xs: 10, md: 3 },
        }}
      >
        <Content />
        <Navigation />
      </Stack>
    </Stack>
  );
};

export default Layout;

import Stack from '@mui/material/Stack';
import Navigation from '@/layout/components/Navigation';
import Content from '@/layout/components/Content';
import Header from '@/layout/components/Header';

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

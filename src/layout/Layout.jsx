import Stack from '@mui/material/Stack';
import Navigation from '@/layout/components/Navigation';
import Content from '@/layout/components/Content';
import Header from '@/layout/components/Header';

const Layout = () => {
  return (
    <Stack
      sx={{
        px: { xs: 2, sm: 4, lg: '10%', xl: '15%' },
        pt: { xs: 8, sm: 9, md: 10 },
        pb: { xs: 8, sm: 9, md: 3 },
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

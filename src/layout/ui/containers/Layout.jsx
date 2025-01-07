import Stack from '@mui/material/Stack';
import Navigation from '@/layout/ui/containers/Navigation';
import Content from '@/layout/ui/containers/Content';
import Header from '@/layout/ui/containers/Header';
import useAuth from '@/modules/auth/hooks/api/useAuth';

const Layout = () => {
  const { isAuth, messages } = useAuth();

  return (
    <Stack
      sx={{
        px: { xs: 1, sm: 8, lg: '10%', xl: '15%' },
        pt: { xs: 8, md: 9 },
        pb: { xs: 8, md: 2 },
        minHeight: 'inherit',
      }}
    >
      <Header isAuth={isAuth} />
      {isAuth ? (
        <Stack sx={{ flexGrow: 1 }}>
          <Content />
          <Navigation isAuth={isAuth} />
        </Stack>
      ) : (
        messages && <div>{messages[0]}</div>
      )}
    </Stack>
  );
};

export default Layout;

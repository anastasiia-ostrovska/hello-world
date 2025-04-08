import Stack from '@mui/material/Stack';
import { LoginForm } from '@widgets/login-form';

const LoginPage = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoginForm />
    </Stack>
  );
};

export default LoginPage;

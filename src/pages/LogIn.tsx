import Stack from '@mui/material/Stack';
import { LogInForm } from '@features/login';

const LogIn = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LogInForm />
    </Stack>
  );
};

export default LogIn;

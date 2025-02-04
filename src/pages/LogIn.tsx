import { LogInForm } from '@/modules/auth';
import Stack from '@mui/material/Stack';

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

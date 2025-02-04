import { FormProvider } from 'react-hook-form';
import useLogInForm from '@/modules/auth/hooks/ui/useLogInForm';
import Stack from '@mui/material/Stack';
import LogInHeader from '@/modules/auth/ui/components/LogInHeader';
import GuestCredentials from '@/modules/auth/ui/containers/GuestCredentials';
import LogInForm from '@/modules/auth/ui/containers/LogInForm';

const LogInFormContainer = () => {
  const { methods, handleFormSubmit } = useLogInForm();

  return (
    <FormProvider {...methods}>
      <Stack spacing={1} sx={{ maxWidth: 300, width: '100%' }}>
        <LogInHeader />
        <GuestCredentials />
        <LogInForm onSubmit={handleFormSubmit} />
      </Stack>
    </FormProvider>
  );
};

export default LogInFormContainer;

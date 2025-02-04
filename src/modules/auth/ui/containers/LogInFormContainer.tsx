import { LogInData } from '@/modules/auth/types';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useLogInMutation } from '@/modules/auth/store/authApi';
import Stack from '@mui/material/Stack';
import LogInHeader from '@/modules/auth/ui/components/LogInHeader';
import GuestCredentials from '@/modules/auth/ui/containers/GuestCredentials';
import LogInForm from '@/modules/auth/ui/containers/LogInForm';

const LogInFormContainer = () => {
  const methods = useForm<LogInData>({
    defaultValues: { email: '', password: '', rememberMe: true },
    delayError: 300,
    mode: 'onTouched',
  });
  const [logIn] = useLogInMutation();

  const onSubmit: SubmitHandler<LogInData> = (data) => {
    logIn(data);
  };

  return (
    <FormProvider {...methods}>
      <Stack spacing={1} sx={{ maxWidth: 300, width: '100%' }}>
        <LogInHeader />
        <GuestCredentials />
        <LogInForm onSubmit={onSubmit} />
      </Stack>
    </FormProvider>
  );
};

export default LogInFormContainer;

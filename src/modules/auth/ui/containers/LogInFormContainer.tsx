import { LogInData } from '@/modules/auth/types';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useLogInMutation } from '@/modules/auth/store/authApi';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import SectionWrapper from '@/layout/ui/components/SectionWrapper';
import LogInForm from '@/modules/auth/ui/containers/LogInForm';

const LogInFormContainer = () => {
  const methods = useForm<LogInData>({
    defaultValues: { email: '', password: '', rememberMe: true },
    delayError: 300,
    mode: 'onTouched',
  });
  const { setValue } = methods;
  const [logIn] = useLogInMutation();

  const onSubmit: SubmitHandler<LogInData> = (data) => {
    logIn(data);
  };

  const handleFillGuestData = () => {
    setValue('email', import.meta.env.VITE_GUEST_EMAIL, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue('password', import.meta.env.VITE_GUEST_PASSWORD, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <FormProvider {...methods}>
      <Stack spacing={1} sx={{ maxWidth: 300, width: '100%' }}>
        <Typography variant="h5" sx={{ alignSelf: 'center' }}>
          Log in
        </Typography>
        <SectionWrapper
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography
            variant="caption"
            color="success"
            sx={{ textAlign: 'center' }}
          >
            * Please, use the Guest credentials to log in.
          </Typography>
          <Chip
            component="button"
            label="Fill with Guest Data"
            color="success"
            variant="outlined"
            onClick={handleFillGuestData}
            sx={{ cursor: 'pointer' }}
          />
        </SectionWrapper>
        <LogInForm onSubmit={onSubmit} />
      </Stack>
    </FormProvider>
  );
};

export default LogInFormContainer;

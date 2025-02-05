import { FormProvider } from 'react-hook-form';
import useLogInForm from '@/modules/auth/hooks/ui/useLogInForm';
import Stack from '@mui/material/Stack';
import LogInHeader from '@/modules/auth/ui/components/LogInHeader';
import GuestCredentials from '@/modules/auth/ui/components/GuestCredentials';
import LogInForm from '@/modules/auth/ui/containers/LogInForm';

const LogInFormContainer = () => {
  const {
    methods,
    handleFormSubmit,
    handleFillGuestData,
    isSubmitButtonDisabled,
  } = useLogInForm();

  return (
    <FormProvider {...methods}>
      <Stack spacing={1} sx={{ maxWidth: 300, width: '100%' }}>
        <LogInHeader />
        <GuestCredentials onClick={handleFillGuestData} />
        <LogInForm
          onSubmit={handleFormSubmit}
          isButtonDisabled={isSubmitButtonDisabled}
        />
      </Stack>
    </FormProvider>
  );
};

export default LogInFormContainer;

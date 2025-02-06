import { FormProvider } from 'react-hook-form';
import { LogInForm } from '@/modules/forms';
import useLogInForm from '@/modules/auth/hooks/ui/useLogInForm';
import Stack from '@mui/material/Stack';
import SectionWrapper from '@/layout/ui/components/SectionWrapper';
import LogInHeader from '@/modules/auth/ui/components/LogInHeader';
import GuestCredentials from '@/modules/auth/ui/components/GuestCredentials';

const LogInFormContainer = () => {
  const {
    methods,
    handleFormSubmit,
    handleFillGuestData,
    isSubmitButtonDisabled,
    isLogInRequestLoading,
  } = useLogInForm();

  return (
    <FormProvider {...methods}>
      <Stack spacing={1} sx={{ maxWidth: 300, width: '100%' }}>
        <LogInHeader />
        <GuestCredentials onClick={handleFillGuestData} />
        <SectionWrapper>
          <LogInForm
            onSubmit={handleFormSubmit}
            isButtonDisabled={isSubmitButtonDisabled}
            isLogInRequestLoading={isLogInRequestLoading}
          />
        </SectionWrapper>
      </Stack>
    </FormProvider>
  );
};

export default LogInFormContainer;

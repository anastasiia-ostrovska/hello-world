import { FormProvider } from 'react-hook-form';
import { LogInForm } from '@/modules/forms';
import Stack from '@mui/material/Stack';
import SectionWrapper from '@/shared/ui/SectionWrapper';
import LogInHeader from '@/modules/auth/ui/components/LogInHeader';
import GuestCredentials from '@/modules/auth/ui/components/GuestCredentials';
import useLogInForm from '@/features/login/model/useLogInForm';

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

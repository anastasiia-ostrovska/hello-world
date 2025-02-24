import { FormProvider } from 'react-hook-form';
import { Form, SubmitButton } from '@/shared/forms';
import Stack from '@mui/material/Stack';
import LogInEmailInput from '@/modules/forms/ui/components/LogInEmailInput';
import LogInPasswordInput from '@/modules/forms/ui/components/LogInPasswordInput';
import LogInCheckbox from '@/modules/forms/ui/components/LogInCheckbox';
import FillGuestDataButton from './FillGuestDataButton';
import { GuestDataLayout, LogInFormLayout } from './LogInFormLayout';
import useLogInForm from '../model/useLogInForm';

const LogInForm = () => {
  const {
    methods,
    handleFormSubmit,
    handleFillGuestData,
    isSubmitButtonDisabled,
    isLogInRequestLoading,
  } = useLogInForm();

  return (
    <FormProvider {...methods}>
      <LogInFormLayout
        heading="Log in"
        guestData={
          <GuestDataLayout
            text="* Please, use the Guest credentials to log in."
            button={<FillGuestDataButton onClick={handleFillGuestData} />}
          />
        }
      >
        <Form onSubmit={handleFormSubmit} spacing={3}>
          <Stack spacing={2}>
            <LogInEmailInput name="email" disabled={isLogInRequestLoading} />
            <LogInPasswordInput
              name="password"
              disabled={isLogInRequestLoading}
            />
            <LogInCheckbox name="rememberMe" disabled={isLogInRequestLoading} />
          </Stack>
          <SubmitButton disabled={isSubmitButtonDisabled}>Log in</SubmitButton>
        </Form>
      </LogInFormLayout>
    </FormProvider>
  );
};

export default LogInForm;

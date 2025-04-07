import { FormProvider } from 'react-hook-form';
import { ControlledTextField, Form, SubmitButton } from '@/shared/forms';
import { FillGuestDataButton } from '@features/fill-form-button';
import {
  GuestDataLayout,
  InputsLayout,
  LogInFormLayout,
} from './LogInFormLayout';
import { useLoginForm } from '../model/useLoginForm';
import input from '../config/input-items';

const LogInForm = () => {
  const {
    methods,
    handleFormSubmit,
    isSubmitButtonDisabled,
    isLogInRequestLoading,
    loginError,
  } = useLoginForm();

  return (
    <FormProvider {...methods}>
      <LogInFormLayout
        heading="Log in"
        error={loginError}
        guestData={
          <GuestDataLayout
            text="* Please, use the Guest credentials to log in."
            button={<FillGuestDataButton />}
          />
        }
      >
        <Form onSubmit={handleFormSubmit} spacing={3}>
          <InputsLayout
            email={
              <ControlledTextField
                {...input.email}
                disabled={isLogInRequestLoading}
              />
            }
            password={
              <ControlledTextField
                {...input.password}
                disabled={isLogInRequestLoading}
              />
            }
          />
          <SubmitButton disabled={isSubmitButtonDisabled}>Log in</SubmitButton>
        </Form>
      </LogInFormLayout>
    </FormProvider>
  );
};

export default LogInForm;

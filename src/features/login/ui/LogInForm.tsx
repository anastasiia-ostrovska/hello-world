import { FormProvider } from 'react-hook-form';
import {
  ControlledCheckbox,
  ControlledTextField,
  Form,
  SubmitButton,
} from '@/shared/forms';
import { FillGuestDataButton } from '@features/fill-form-button';
import {
  GuestDataLayout,
  InputsLayout,
  LogInFormLayout,
} from './LogInFormLayout';
import useLogInForm from '../model/useLogInForm';
import input from '../config/input-items';

const LogInForm = () => {
  const {
    methods,
    handleFormSubmit,
    isSubmitButtonDisabled,
    isLogInRequestLoading,
    loginError,
  } = useLogInForm();

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
            rememberMe={
              <ControlledCheckbox
                {...input.rememberMe}
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

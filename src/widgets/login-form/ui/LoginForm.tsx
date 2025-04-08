import { FormProvider } from 'react-hook-form';
import { Form, SubmitButton } from '@/shared/forms';
import { FillGuestDataButton } from '@features/fill-form-button';
import { EmailInput, PasswordInput } from '@features/login-inputs';
import LoginErrorNotification from './LoginErrorNotification';
import {
  FormGuestDataLayout,
  FormHeaderLayout,
  FormInputsLayout,
  LoginFormBlockLayout,
} from './LoginFormLayouts';
import { useLoginForm } from '../model/useLoginForm';

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
      <LoginFormBlockLayout
        header={<FormHeaderLayout heading="Log in" />}
        guestDataHelper={
          <FormGuestDataLayout
            text="* Please, use the Guest credentials to log in."
            button={<FillGuestDataButton />}
          />
        }
        errorNotification={<LoginErrorNotification error={loginError} />}
        form={
          <Form onSubmit={handleFormSubmit} spacing={3}>
            <FormInputsLayout
              email={<EmailInput isDisabled={isLogInRequestLoading} />}
              password={<PasswordInput isDisabled={isLogInRequestLoading} />}
            />
            <SubmitButton disabled={isSubmitButtonDisabled}>
              Log in
            </SubmitButton>
          </Form>
        }
      />
    </FormProvider>
  );
};

export default LogInForm;

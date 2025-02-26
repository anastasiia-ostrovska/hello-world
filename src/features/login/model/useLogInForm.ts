import { BaseSyntheticEvent, useEffect } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { getErrorMessage } from '@shared/error';
import { useLogInMutation } from './loginApi';
import { LogInData, LogInInput } from './types';

interface UseLogInFormResult {
  methods: UseFormReturn<LogInData>;
  handleFormSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  handleFillGuestData: () => void;
  isSubmitButtonDisabled: boolean;
  isLogInRequestLoading: boolean;
  errorMessage: string | undefined;
}

const useLogInForm = (): UseLogInFormResult => {
  const methods = useForm<LogInData>({
    defaultValues: {
      [LogInInput.Email]: '',
      [LogInInput.Password]: '',
      [LogInInput.RememberMe]: true,
    },
    mode: 'onTouched',
  });
  const {
    handleSubmit,
    reset,
    formState: { dirtyFields, isSubmitting, isSubmitSuccessful },
  } = methods;
  const [
    logIn,
    { isLoading: isLogInRequestLoading, isSuccess: logInRequestSuccess, error },
  ] = useLogInMutation();

  useEffect(() => {
    if (isSubmitSuccessful && logInRequestSuccess) {
      reset();
    }
  }, [isSubmitSuccessful, logInRequestSuccess, reset]);

  const isEmptyField = !dirtyFields.email || !dirtyFields.password;
  const isSubmitButtonDisabled =
    isEmptyField || isSubmitting || isLogInRequestLoading;
  let errorMessage;

  if (error) {
    errorMessage = typeof error === 'string' ? error : getErrorMessage(error);
  }

  const handleFillGuestData = () => {
    reset(
      {
        email: import.meta.env.VITE_GUEST_EMAIL,
        password: import.meta.env.VITE_GUEST_PASSWORD,
      },
      {
        keepDefaultValues: true,
        keepTouched: true,
      }
    );
  };

  const handleFormSubmit: SubmitHandler<LogInData> = (data) => {
    logIn(data);
  };

  return {
    methods,
    handleFormSubmit: handleSubmit(handleFormSubmit),
    handleFillGuestData,
    isSubmitButtonDisabled,
    isLogInRequestLoading,
    errorMessage,
  };
};

export default useLogInForm;

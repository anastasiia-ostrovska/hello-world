import { BaseSyntheticEvent, useEffect } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { useLogInMutation } from './loginApi';
import { LogInData } from './types';

interface UseLogInFormResult {
  methods: UseFormReturn<LogInData>;
  handleFormSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  handleFillGuestData: () => void;
  isSubmitButtonDisabled: boolean;
  isLogInRequestLoading: boolean;
}

const useLogInForm = (): UseLogInFormResult => {
  const methods = useForm<LogInData>({
    defaultValues: { email: '', password: '', rememberMe: true },
    mode: 'onTouched',
  });
  const {
    handleSubmit,
    reset,
    formState: { dirtyFields, isSubmitting, isSubmitSuccessful },
  } = methods;
  const [
    logIn,
    { isLoading: isLogInRequestLoading, isSuccess: logInRequestSuccess },
  ] = useLogInMutation();

  useEffect(() => {
    if (isSubmitSuccessful && logInRequestSuccess) {
      reset();
    }
  }, [isSubmitSuccessful, logInRequestSuccess, reset]);

  const isEmptyField = !dirtyFields.email || !dirtyFields.password;
  const isSubmitButtonDisabled =
    isEmptyField || isSubmitting || isLogInRequestLoading;

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
  };
};

export default useLogInForm;

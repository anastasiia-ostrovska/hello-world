import { LogInData } from '@/modules/auth/types';
import { BaseSyntheticEvent, useCallback, useEffect, useMemo } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { useLogInMutation } from '@/modules/auth/store/authApi';

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

  const isSubmitButtonDisabled = useMemo(() => {
    const isEmptyField = !dirtyFields.email || !dirtyFields.password;
    return isEmptyField || isSubmitting || isLogInRequestLoading;
  }, [
    dirtyFields.email,
    dirtyFields.password,
    isLogInRequestLoading,
    isSubmitting,
  ]);

  const handleFillGuestData = useCallback(() => {
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
  }, [reset]);

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

import { LogInData } from '@/modules/auth/types';
import { BaseSyntheticEvent, useCallback, useMemo } from 'react';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { useLogInMutation } from '@/modules/auth/store/authApi';

interface UseLogInFormResult {
  methods: UseFormReturn<LogInData>;
  // handleFormSubmit: (data: LogInData) => void;
  handleFormSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  handleFillGuestData: () => void;
  isSubmitButtonDisabled: boolean;
}

const useLogInForm = (): UseLogInFormResult => {
  const methods = useForm<LogInData>({
    defaultValues: { email: '', password: '', rememberMe: true },
    delayError: 300,
    mode: 'onTouched',
  });
  const {
    handleSubmit,
    setValue,
    formState: { dirtyFields, isSubmitting },
  } = methods;
  const [logIn] = useLogInMutation();

  const isSubmitButtonDisabled = useMemo(() => {
    const isEmptyField = !dirtyFields.email || !dirtyFields.password;
    return isEmptyField || isSubmitting;
  }, [dirtyFields.email, dirtyFields.password, isSubmitting]);

  const handleFillGuestData = useCallback(() => {
    setValue('email', import.meta.env.VITE_GUEST_EMAIL, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue('password', import.meta.env.VITE_GUEST_PASSWORD, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }, [setValue]);

  const handleFormSubmit: SubmitHandler<LogInData> = (data) => {
    logIn(data);
  };

  return {
    methods,
    handleFormSubmit: handleSubmit(handleFormSubmit),
    handleFillGuestData,
    isSubmitButtonDisabled,
  };
};
export default useLogInForm;

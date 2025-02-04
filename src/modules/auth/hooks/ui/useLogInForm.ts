import { LogInData } from '@/modules/auth/types';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { useLogInMutation } from '@/modules/auth/store/authApi';
import { useMemo } from 'react';

interface UseLogInFormResult {
  methods: UseFormReturn<LogInData>;
  handleFormSubmit: (data: LogInData) => void;
  isSubmitButtonDisabled: boolean;
}

const useLogInForm = (): UseLogInFormResult => {
  const methods = useForm<LogInData>({
    defaultValues: { email: '', password: '', rememberMe: true },
    delayError: 300,
    mode: 'onTouched',
  });
  const {
    formState: { dirtyFields, isSubmitting },
  } = methods;
  const [logIn] = useLogInMutation();

  const isSubmitButtonDisabled = useMemo(() => {
    const isEmptyField = !dirtyFields.email || !dirtyFields.password;
    return isEmptyField || isSubmitting;
  }, [dirtyFields.email, dirtyFields.password, isSubmitting]);

  const handleFormSubmit: SubmitHandler<LogInData> = (data) => {
    logIn(data);
  };

  return { methods, handleFormSubmit, isSubmitButtonDisabled };
};
export default useLogInForm;

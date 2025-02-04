import { LogInData } from '@/modules/auth/types';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { useLogInMutation } from '@/modules/auth/store/authApi';

interface UseLogInFormResult {
  methods: UseFormReturn<LogInData>;
  handleFormSubmit: (data: LogInData) => void;
}

const useLogInForm = (): UseLogInFormResult => {
  const methods = useForm<LogInData>({
    defaultValues: { email: '', password: '', rememberMe: true },
    delayError: 300,
    mode: 'onTouched',
  });
  const [logIn] = useLogInMutation();

  const handleFormSubmit: SubmitHandler<LogInData> = (data) => {
    logIn(data);
  };

  return { methods, handleFormSubmit };
};

export default useLogInForm;

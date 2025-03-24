import { BaseSyntheticEvent, useEffect } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { useAppDispatch } from '@shared/redux';
import { storeAccessToken } from '@features/auth';
import { useLogInMutation } from '../api/loginApi';
import { LogInData, LogInInput } from './types';

interface UseLogInFormResult {
  methods: UseFormReturn<LogInData>;
  handleFormSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  handleFillGuestData: () => void;
  isSubmitButtonDisabled: boolean;
  isLogInRequestLoading: boolean;
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
    {
      isLoading: isLogInRequestLoading,
      isSuccess: logInRequestSuccess,
      data: logInResponse,
    },
  ] = useLogInMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSubmitSuccessful && logInRequestSuccess) {
      reset();
      dispatch(storeAccessToken(logInResponse.data.token));
    }
  }, [isSubmitSuccessful, logInRequestSuccess, reset, logInResponse, dispatch]);

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

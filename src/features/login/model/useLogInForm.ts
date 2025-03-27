import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { useAppDispatch } from '@shared/redux';
import { setIsAuth, storeAccessToken } from '@shared/api';
import { ErrorMessage, getErrorMessage } from '@shared/error';
import { LOGIN_ERROR_MESSAGES } from '@features/login/config/error-messages';
import { useLogInMutation } from '../api/loginApi';
import { LogInData, LogInInput } from './types';

interface UseLogInFormResult {
  methods: UseFormReturn<LogInData>;
  handleFormSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  handleFillGuestData: () => void;
  isSubmitButtonDisabled: boolean;
  isLogInRequestLoading: boolean;
  loginError: ErrorMessage | undefined;
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
      isError,
      error,
    },
  ] = useLogInMutation();
  const [loginError, setLoginError] = useState<ErrorMessage | undefined>(
    undefined
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      const getLoginErrorMessage = getErrorMessage(LOGIN_ERROR_MESSAGES);
      const loginError = getLoginErrorMessage(error);

      setLoginError(loginError);
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSubmitSuccessful && logInRequestSuccess) {
      reset();
      dispatch(storeAccessToken(logInResponse.data.token));
      dispatch(setIsAuth(true));
    }
  }, [isSubmitSuccessful, logInRequestSuccess, reset, logInResponse, dispatch]);

  const isEmptyField = !dirtyFields.email || !dirtyFields.password;
  const isSubmitButtonDisabled =
    isEmptyField || isSubmitting || isLogInRequestLoading;

  const handleFillGuestData = () => {
    reset(
      {
        [LogInInput.Email]: import.meta.env.VITE_GUEST_EMAIL,
        [LogInInput.Password]: import.meta.env.VITE_GUEST_PASSWORD,
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
    loginError,
  };
};

export default useLogInForm;

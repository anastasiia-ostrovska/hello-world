import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { ErrorMessage, getErrorMessage } from '@shared/error-message';
import { useAppDispatch } from '@shared/redux';
import { storeAccessToken } from '@entities/session';
import { useLoginMutation } from '@entities/session/api/loginApi';
import { LoginData, LoginField } from '@entities/session/model/types';
import { LOGIN_ERROR_MESSAGES } from '../consts/error-messages';

interface UseLogInFormResult {
  methods: UseFormReturn<LoginData>;
  handleFormSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  isSubmitButtonDisabled: boolean;
  isLogInRequestLoading: boolean;
  loginError: ErrorMessage | null;
}

export const useLoginForm = (): UseLogInFormResult => {
  const methods = useForm<LoginData>({
    defaultValues: {
      [LoginField.Email]: '',
      [LoginField.Password]: '',
    },
    mode: 'onTouched',
  });
  const {
    handleSubmit,
    reset,
    formState: { dirtyFields, isSubmitting, isSubmitSuccessful },
  } = methods;
  const [
    login,
    {
      isLoading: isLoginRequestLoading,
      isSuccess: loginRequestSuccess,
      data: loginResponse,
      isError,
      error,
    },
  ] = useLoginMutation();

  const [loginError, setLoginError] = useState<ErrorMessage | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      const getLoginErrorMessage = getErrorMessage(LOGIN_ERROR_MESSAGES);
      const loginError = getLoginErrorMessage(error);

      setLoginError(loginError);
    }

    return () => setLoginError(null);
  }, [error, isError]);

  useEffect(() => {
    if (isSubmitSuccessful && loginRequestSuccess) {
      reset();
      dispatch(storeAccessToken(loginResponse.data.token));
    }
  }, [isSubmitSuccessful, loginRequestSuccess, reset, loginResponse, dispatch]);

  const isEmptyField = !dirtyFields.email || !dirtyFields.password;
  const isSubmitButtonDisabled =
    isEmptyField || isSubmitting || isLoginRequestLoading;

  const handleFormSubmit: SubmitHandler<LoginData> = (data) => {
    login(data);
  };

  return {
    methods,
    handleFormSubmit: handleSubmit(handleFormSubmit),
    isSubmitButtonDisabled,
    isLogInRequestLoading: isLoginRequestLoading,
    loginError,
  };
};

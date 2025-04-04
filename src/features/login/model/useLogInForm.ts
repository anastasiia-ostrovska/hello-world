import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { ErrorMessage, getErrorMessage } from '@shared/error-message';
import { useAppDispatch } from '@shared/redux';
import { storeAccessToken } from '@entities/session';
import { LOGIN_ERROR_MESSAGES } from '@features/login/config/error-messages';
import { useLoginMutation } from '@entities/session/api/loginApi';
import { LoginData, LoginField } from '@entities/session/model/types';

interface UseLogInFormResult {
  methods: UseFormReturn<LoginData>;
  handleFormSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  isSubmitButtonDisabled: boolean;
  isLogInRequestLoading: boolean;
  loginError: ErrorMessage | undefined;
}

const useLogInForm = (): UseLogInFormResult => {
  const methods = useForm<LoginData>({
    defaultValues: {
      [LoginField.Email]: '',
      [LoginField.Password]: '',
      [LoginField.RememberMe]: true,
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
  ] = useLoginMutation();
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
      setLoginError(undefined);
      reset();
      dispatch(storeAccessToken(logInResponse.data.token));
    }
  }, [isSubmitSuccessful, logInRequestSuccess, reset, logInResponse, dispatch]);

  const isEmptyField = !dirtyFields.email || !dirtyFields.password;
  const isSubmitButtonDisabled =
    isEmptyField || isSubmitting || isLogInRequestLoading;

  const handleFormSubmit: SubmitHandler<LoginData> = (data) => {
    logIn(data);
  };

  return {
    methods,
    handleFormSubmit: handleSubmit(handleFormSubmit),
    isSubmitButtonDisabled,
    isLogInRequestLoading,
    loginError,
  };
};

export default useLogInForm;

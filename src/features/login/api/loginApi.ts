import {
  ApiResponseTemplate,
  baseAPI,
  checkResponseError,
  ENDPOINTS,
  METHODS,
  TAGS,
} from '@shared/api';
import { getErrorMessage } from '@shared/error';
import { User } from '@shared/user';
import { LogInData } from '../model/types';

interface LogInResponseData {
  userId: User['id'];
  token: string;
}

type LogInResponse = ApiResponseTemplate<LogInResponseData>;

const loginApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    logIn: builder.mutation<LogInResponse, LogInData>({
      query: (logInData) => ({
        method: METHODS.POST,
        url: ENDPOINTS.LOGIN,
        body: logInData,
      }),
      transformResponse: (response: LogInResponse) =>
        checkResponseError(response),
      transformErrorResponse: (error) => getErrorMessage(error),
      invalidatesTags: [TAGS.AUTH],
    }),

    logOut: builder.mutation<ApiResponseTemplate, void>({
      query: () => ({
        method: METHODS.DELETE,
        url: ENDPOINTS.LOGIN,
      }),
      transformResponse: (response: LogInResponse) =>
        checkResponseError(response),
      transformErrorResponse: (error) => getErrorMessage(error),
      invalidatesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useLogInMutation, useLogOutMutation } = loginApi;

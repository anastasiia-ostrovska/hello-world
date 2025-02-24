import {
  ApiResponseTemplate,
  baseAPI,
  ENDPOINTS,
  METHODS,
  TAGS,
} from '@/shared/api';
import { User } from '@/shared/user';
import { LogInData } from './types';

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
      invalidatesTags: [TAGS.AUTH],
    }),

    logOut: builder.mutation<ApiResponseTemplate, void>({
      query: () => ({
        method: METHODS.DELETE,
        url: ENDPOINTS.LOGIN,
      }),
      invalidatesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useLogInMutation, useLogOutMutation } = loginApi;

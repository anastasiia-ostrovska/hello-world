import {
  ApiResponseTemplate,
  baseAPI,
  LOGIN,
  METHODS,
  TAGS,
} from '@/shared/api';
import { LogInData } from '@/modules/auth/types';
import { User } from '@/shared/user';

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
        url: LOGIN,
        body: logInData,
      }),
      invalidatesTags: [TAGS.AUTH],
    }),

    logOut: builder.mutation<ApiResponseTemplate, void>({
      query: () => ({
        method: METHODS.DELETE,
        url: LOGIN,
      }),
      invalidatesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useLogInMutation, useLogOutMutation } = loginApi;

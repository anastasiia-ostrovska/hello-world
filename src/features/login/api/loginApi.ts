import {
  ApiSuccessResponse,
  baseAPI,
  ENDPOINTS,
  METHODS,
  TAGS,
} from '@shared/api';
import { LogInData } from '../model/types';

interface LogInResponseData {
  userId: number;
  token: string;
}

type LogInResponse = ApiSuccessResponse<LogInResponseData>;
type LogOutResponse = { message: string };

const loginApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    logIn: builder.mutation<LogInResponse, LogInData>({
      query: (logInData) => ({
        method: METHODS.POST,
        url: ENDPOINTS.LOGIN,
        body: logInData,
        headers: {
          // 'x-mock-response-code': '401',
        },
      }),
      invalidatesTags: [TAGS.AUTH],
    }),

    logOut: builder.mutation<LogOutResponse, void>({
      query: () => ({
        method: METHODS.DELETE,
        url: ENDPOINTS.LOGIN,
        headers: {
          // 'x-mock-response-code': '500',
        },
      }),
      invalidatesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useLogInMutation, useLogOutMutation } = loginApi;

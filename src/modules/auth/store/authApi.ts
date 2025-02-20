import {
  ApiResponseTemplate,
  AUTH_ME,
  baseAPI,
  DELETE,
  LOGIN,
  POST,
} from '@/shared/api';
import { AuthMeResponse, LogInData } from '@/modules/auth/types';
import { User } from '@/shared/user';

interface LogInResponseData {
  userId: User['id'];
  token: string;
}

type LogInResponse = ApiResponseTemplate<LogInResponseData>;

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query<AuthMeResponse, void>({
      query: () => AUTH_ME,
      providesTags: ['Auth'],
    }),

    logIn: builder.mutation<LogInResponse, LogInData>({
      query: (logInData) => ({
        method: POST,
        url: LOGIN,
        body: logInData,
      }),
      invalidatesTags: ['Auth'],
    }),

    logOut: builder.mutation<ApiResponseTemplate, void>({
      query: () => ({
        method: DELETE,
        url: LOGIN,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useGetAuthDataQuery, useLogInMutation, useLogOutMutation } =
  authApi;

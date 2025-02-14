import { ApiResponseTemplate } from '@/shared/types/response-data';
import { AuthMeResponse, LogInData } from '@/modules/auth/types';
import { baseAPI } from '@/shared/api';
import { DELETE, POST } from '@/shared/api/methods';
import { AUTH_ME, LOGIN } from '@/shared/api/endpoints';
import { UserId } from '@/modules/users';

interface LogInResponseData {
  userId: UserId;
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

import { AuthMeResponse, LogInData, LogInResponse } from '@/modules/auth/types';
import { baseAPI } from '@/redux';
import { POST } from '@/shared/constants/query-methods';
import { LOGIN, AUTH_ME } from '@/shared/constants/query-endpoints';

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    logIn: builder.mutation<LogInResponse, LogInData>({
      query: (logInData) => ({
        method: POST,
        url: LOGIN,
        body: logInData,
      }),
      invalidatesTags: ['Auth'],
    }),

    getAuthData: builder.query<AuthMeResponse, void>({
      query: () => AUTH_ME,
      providesTags: ['Auth'],
    }),
  }),
});

export const { useLogInMutation, useGetAuthDataQuery } = authApi;

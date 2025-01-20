import { ApiResponseTemplate } from '@/shared/types/response-data';
import { AuthMeResponse, LogInData, LogInResponse } from '@/modules/auth/types';
import { baseAPI } from '@/redux';
import { POST, DELETE } from '@/shared/constants/query-methods';
import { LOGIN, AUTH_ME } from '@/shared/constants/query-endpoints';

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

export const { useLogInMutation, useGetAuthDataQuery } = authApi;

import { baseAPI, ENDPOINTS, METHODS, TAGS } from '@shared/api';
import { LoginData, LoginResponse, LogoutResponse } from '../model/types';

const loginApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginData>({
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

    logout: builder.mutation<LogoutResponse, void>({
      query: () => ({
        method: METHODS.DELETE,
        url: ENDPOINTS.LOGIN,
        headers: {
          'x-mock-response-code': '401',
        },
      }),
      invalidatesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = loginApi;

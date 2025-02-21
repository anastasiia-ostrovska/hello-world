import {
  ApiResponseTemplate,
  AUTH_ME,
  baseAPI,
  LOGIN,
  METHODS,
  TAGS,
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
      providesTags: [TAGS.AUTH],
    }),

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

export const { useGetAuthDataQuery, useLogInMutation, useLogOutMutation } =
  authApi;

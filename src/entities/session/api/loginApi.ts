import { baseAPI, ENDPOINTS, METHODS, TAGS } from '@shared/api';
import { LoginData, LoginResponse } from '../model/types';

const loginApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginData>({
      query: (logInData) => ({
        method: METHODS.POST,
        url: ENDPOINTS.LOGIN,
        body: logInData,
      }),
      invalidatesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useLoginMutation } = loginApi;

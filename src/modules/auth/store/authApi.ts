import { AUTH_ME } from '@/shared/constants/API-endpoints';
import baseAPI from '@/redux/base-API';

interface AuthData {
  id: number;
  email: string;
  login: string;
}
interface AuthMeResponse {
  data: AuthData;
  resultCode: number;
  messages: string[];
}

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuthData: builder.query<AuthMeResponse, void>({
      query: () => AUTH_ME,
    }),
  }),
  overrideExisting: true,
});

export const { useGetAuthDataQuery } = authApi;

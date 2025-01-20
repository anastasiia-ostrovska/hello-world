import { ApiResponseTemplate } from '@/shared/types/response-data';
import { UserId } from '@/modules/users';

export interface LogInData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export type LogInResponse = ApiResponseTemplate<{
  userId: UserId;
}>;

export interface AuthData {
  id: UserId;
  email: string;
  login: string;
}

export type AuthMeResponse = ApiResponseTemplate<AuthData>;

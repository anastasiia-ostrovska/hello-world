import { ApiResponseTemplate } from '@/shared/api';
import { UserId } from '@/modules/users';

export interface LogInData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthData {
  id: UserId;
  login: string;
  email: string;
}

export type AuthMeResponse = ApiResponseTemplate<AuthData>;

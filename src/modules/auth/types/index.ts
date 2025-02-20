import { ApiResponseTemplate } from '@/shared/api';
import { User } from '@/shared/user';

export interface LogInData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthData {
  id: User['id'];
  login: string;
  email: string;
}

export type AuthMeResponse = ApiResponseTemplate<AuthData>;

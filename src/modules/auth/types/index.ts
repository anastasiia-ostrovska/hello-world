import { ApiResponseTemplate } from '@/shared/types/response-data';

export interface AuthData {
  id: number;
  email: string;
  login: string;
}

export type AuthMeResponse = ApiResponseTemplate<AuthData>;

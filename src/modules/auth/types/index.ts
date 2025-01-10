import { ApiMutationResponse } from '@/shared/types/api-response';

export interface AuthData {
  id: number;
  email: string;
  login: string;
}

export type AuthMeResponse = ApiMutationResponse<AuthData>;

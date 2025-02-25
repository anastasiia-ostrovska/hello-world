import { User } from '@/shared/user';

export interface ApiResponseTemplate<D = object> {
  resultCode: 0 | 1;
  fieldsErrors: string[];
  messages: string[];
  data: D;
}

export interface AuthData {
  id: User['id'];
  login: string;
  email: string;
}

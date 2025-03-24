import { User } from '@shared/user';

export interface AuthData {
  id: User['id'];
  login: string;
  email: string;
}

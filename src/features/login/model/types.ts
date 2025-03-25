import { User } from '@shared/user';

export interface AuthData {
  id: User['id'];
  login: string;
  email: string;
}

export enum LogInInput {
  Email = 'email',
  Password = 'password',
  RememberMe = 'rememberMe',
}

export interface LogInData {
  [LogInInput.Email]: string;
  [LogInInput.Password]: string;
  [LogInInput.RememberMe]: boolean;
}

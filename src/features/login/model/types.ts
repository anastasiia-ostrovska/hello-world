export interface AuthData {
  userId: number;
  username: string;
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

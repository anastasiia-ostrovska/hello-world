import { ApiSuccessResponse } from '@shared/api';

export enum LoginField {
  Email = 'email',
  Password = 'password',
  RememberMe = 'rememberMe',
}

export interface LoginData {
  [LoginField.Email]: string;
  [LoginField.Password]: string;
  [LoginField.RememberMe]: boolean;
}

interface LoginResponseData {
  userId: number;
  token: string;
}

export type LoginResponse = ApiSuccessResponse<LoginResponseData>;
export type LogoutResponse = { message: string };

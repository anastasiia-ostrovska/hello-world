import { ApiSuccessResponse } from '@shared/api';

export enum LoginField {
  Email = 'email',
  Password = 'password',
}

export interface LoginData {
  [LoginField.Email]: string;
  [LoginField.Password]: string;
}

interface LoginResponseData {
  userId: number;
  token: string;
}

export type LoginResponse = ApiSuccessResponse<LoginResponseData>;

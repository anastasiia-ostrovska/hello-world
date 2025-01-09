export interface AuthData {
  id: number;
  email: string;
  login: string;
}

export interface AuthMeResponse {
  data: AuthData;
  resultCode: number;
  messages: string[];
}

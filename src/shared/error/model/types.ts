enum ErrorType {
  INVALID_CREDENTIALS,
  INVALID_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT,
  SERVER_ERROR,
  UNEXPECTED_ERROR,
}

export interface ApiErrorResponse {
  type: ErrorType;
  message: string;
}

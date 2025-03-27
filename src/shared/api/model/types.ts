export interface ApiResponseTemplate<D = object> {
  resultCode: 0 | 1;
  fieldsErrors: string[];
  messages: string[];
  data: D;
}

export interface ApiSuccessResponse<D = object> {
  data: D;
  message: string;
}

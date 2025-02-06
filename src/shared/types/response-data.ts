export interface ApiResponseTemplate<D = object> {
  resultCode: 0 | 1;
  fieldsErrors: string[];
  messages: string[];
  data: D;
}

export interface ResponseDataState<D = object> {
  data: D | undefined;
  isLoading: boolean;
}

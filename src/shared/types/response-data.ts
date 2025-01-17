export interface ApiResponseTemplate<D = object> {
  resultCode: number;
  messages: string[];
  data: D;
}

export interface ResponseDataState<D = object> {
  data: D | undefined;
  isLoading: boolean;
}

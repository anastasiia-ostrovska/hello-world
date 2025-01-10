export interface ApiMutationResponse<T> {
  resultCode: number;
  messages: string[];
  data: T;
}

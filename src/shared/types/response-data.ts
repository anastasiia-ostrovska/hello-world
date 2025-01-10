export interface ResponseData<T = object> {
  resultCode: number;
  messages: string[];
  data: T;
}

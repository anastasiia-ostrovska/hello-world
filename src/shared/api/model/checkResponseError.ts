import { ApiResponseTemplate } from './types';

const checkResponseError = <T>(response: T): T => {
  if ((response as ApiResponseTemplate).resultCode !== 0) {
    throw new Error((response as any).messages[0]);
  }
  return response;
};

export default checkResponseError;

import { ApiResponseTemplate } from './types';

const checkResponseError = <R extends ApiResponseTemplate>(response: R): R => {
  if (response.resultCode !== 0) {
    throw new Error(response.messages[0]);
  }
  return response;
};

export default checkResponseError;

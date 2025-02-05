import { REGEXP_MATCH_ALL_WHITESPACES } from '@/modules/forms/validation/constants/regExp';
import createValidator from '../factory';

const validateWhitespaces = (value: string) => {
  return value === value.replace(REGEXP_MATCH_ALL_WHITESPACES, '');
};

export const whitespacesForbidden = createValidator(validateWhitespaces);

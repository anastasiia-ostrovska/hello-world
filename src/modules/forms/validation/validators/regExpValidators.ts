import {
  REGEXP_MATCH_DIGIT,
  REGEXP_MATCH_SPECIAL_CHARACTER,
  REGEXP_MATCH_UPPERCASE,
  REGEXP_VALID_EMAIL,
} from '../constants/regExp';
import createValidator from '../factory';

const validateWIthRegExp = (regExp: RegExp) => (value: string) => {
  return regExp.test(value);
};

export const validEmailFormat = createValidator(
  validateWIthRegExp(REGEXP_VALID_EMAIL)
);
export const containsUppercase = createValidator(
  validateWIthRegExp(REGEXP_MATCH_UPPERCASE)
);
export const containsDigit = createValidator(
  validateWIthRegExp(REGEXP_MATCH_DIGIT)
);
export const containsSpecialCharacter = createValidator(
  validateWIthRegExp(REGEXP_MATCH_SPECIAL_CHARACTER)
);

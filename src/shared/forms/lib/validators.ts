import * as REGEXP from '@shared/consts';
import createValidator from './validator-factory';

// --- REGEXP validators ---
const validateWIthRegExp = (regExp: RegExp) => (value: string) => {
  return regExp.test(value);
};

export const validEmailFormat = createValidator(
  validateWIthRegExp(REGEXP.VALID_EMAIL)
);
export const containsUppercase = createValidator(
  validateWIthRegExp(REGEXP.MATCH_UPPERCASE)
);
export const containsDigit = createValidator(
  validateWIthRegExp(REGEXP.MATCH_DIGIT)
);
export const containsSpecialCharacter = createValidator(
  validateWIthRegExp(REGEXP.MATCH_SPECIAL_CHARACTER)
);

// --- LENGTH validators ----
const validateMinLength = (minLength: number) => (value: string) => {
  return value.length >= minLength;
};

export const minLength14 = createValidator(validateMinLength(14));

// ---- REQUIRED validators ----
const validateValueExists = (value: string) => {
  return !!value;
};

export const fieldIsRequired = createValidator(validateValueExists);

// ---- WHITESPACE validators ----
const validateWhitespaces = (value: string) => {
  return value === value.replace(REGEXP.MATCH_ALL_WHITESPACES, '');
};

export const whitespacesForbidden = createValidator(validateWhitespaces);

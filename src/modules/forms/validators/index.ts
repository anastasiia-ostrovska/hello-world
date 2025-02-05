import {
  REGEXP_MATCH_ALL_WHITESPACES,
  REGEXP_MATCH_DIGIT,
  REGEXP_MATCH_SPECIAL_CHARACTER,
  REGEXP_MATCH_UPPERCASE,
  REGEXP_VALID_EMAIL,
} from '@/modules/forms/constants';

const validateWithRegExp =
  (regExp: RegExp) => (message: string) => (value: string) => {
    return regExp.test(value) || message;
  };

export const containsUppercase = validateWithRegExp(REGEXP_MATCH_UPPERCASE);
export const containsDigit = validateWithRegExp(REGEXP_MATCH_DIGIT);
export const containsSpecialCharacter = validateWithRegExp(
  REGEXP_MATCH_SPECIAL_CHARACTER
);
export const inValidEmailFormat = validateWithRegExp(REGEXP_VALID_EMAIL);

export const mustContainUppercase = containsUppercase(
  'Your password must contain at least one uppercase letter.'
);

export const mustContainDigit = containsDigit(
  'Your password must contain at least one digit.'
);

export const mustContainSpecialCharacter = containsSpecialCharacter(
  'Your password must contain at least one special character.'
);

export const mustBeInValidEmailFormat = inValidEmailFormat(
  'Please enter a valid email address in the format: example@domain.com.'
);

export const validateMinLength =
  (length: number, message: string) => (value: string) => {
    return value.length >= length || message;
  };

export const minLengthMustBe14 = validateMinLength(
  14,
  'Your password must be at least 14 characters long.'
);

export const requiredField = (message: string) => (value: string) => {
  return !!value || message;
};

export const emailRequired = requiredField('Please, enter your email');
export const passwordRequired = requiredField('Please, enter your password');

export const validateEmptySpaces = (message: string) => (value: string) => {
  return value === value.replace(REGEXP_MATCH_ALL_WHITESPACES, '') || message;
};

export const mustNotContainEmptySpaces = validateEmptySpaces(
  'Please, remove empty spaces'
);

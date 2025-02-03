const validateWithRegExp =
  (regExp: RegExp) => (message: string) => (value: string) => {
    return regExp.test(value) || message;
  };

export const containsUppercase = validateWithRegExp(/\p{Lu}/u);
export const containsDigit = validateWithRegExp(/\d/);
export const containsSpecialCharacter = validateWithRegExp(
  /[!@#$%^&*(),.?":{}|<>]/
);

export const inValidEmailFormat = validateWithRegExp(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
);

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

export const minLengthMustBe16 = validateMinLength(
  16,
  'Your password must be at least 16 characters long.'
);

export const requiredField = (message: string) => (value: string) => {
  return !!value || message;
};

export const emailRequired = requiredField('Please, enter your email');
export const passwordRequired = requiredField('Please, enter your password');

export const validateEmptySpaces = (message: string) => (value: string) => {
  return value === value.replace(/\s+/g, '') || message;
};

export const mustNotContainEmptySpaces = validateEmptySpaces(
  'Please, remove empty spaces'
);

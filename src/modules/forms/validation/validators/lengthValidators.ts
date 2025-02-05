import createValidator from '../factory';

const validateMinLength = (minLength: number) => (value: string) => {
  return value.length >= minLength;
};

export const minLength14 = createValidator(validateMinLength(14));

import createValidator from '../factory';

const validateValueExists = (value: string) => {
  return !!value;
};

export const fieldIsRequired = createValidator(validateValueExists);

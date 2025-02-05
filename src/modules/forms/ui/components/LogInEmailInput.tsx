import { ControlledInputProps } from '@/modules/forms/types';
import { emailValidationRules } from '@/modules/forms/validation/validation-rules';
import ControlledTextField from './ControlledTextField';

const LogInEmailInput = ({ name }: Pick<ControlledInputProps, 'name'>) => {
  return (
    <ControlledTextField
      name={name}
      type="email"
      label="Email"
      autoComplete="email"
      helperText="in the format: example@domain.com"
      required
      rules={{
        validate: emailValidationRules,
      }}
    />
  );
};

export default LogInEmailInput;

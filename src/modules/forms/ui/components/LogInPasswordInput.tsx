import { ControlledInputProps } from '@/modules/forms/types';
import { passwordValidationRules } from '@/modules/forms/validation/validation-rules';
import ControlledTextField from './ControlledTextField';

const LogInPasswordInput = ({ name }: Pick<ControlledInputProps, 'name'>) => {
  return (
    <ControlledTextField
      name={name}
      type="password"
      label="Password"
      autoComplete="current-password"
      required
      helperText="16+ chars, uppercase, number and symbol"
      rules={{
        validate: passwordValidationRules,
      }}
    />
  );
};

export default LogInPasswordInput;

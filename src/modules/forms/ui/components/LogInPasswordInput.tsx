import { LogInInputProps } from '@/modules/forms/types';
import { passwordValidationRules } from '@/modules/forms/validation/validation-rules';
import { ControlledTextField } from '@/shared/forms';

const LogInPasswordInput = ({ name, disabled }: LogInInputProps) => {
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
      disabled={disabled}
    />
  );
};

export default LogInPasswordInput;

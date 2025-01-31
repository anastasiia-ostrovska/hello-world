import { ControlledTextField } from '@/modules/forms';
import {
  emailRequired,
  mustBeInValidEmailFormat,
} from '@/modules/forms/validators';

const LogInEmailInput = () => {
  return (
    <ControlledTextField
      type="email"
      name="email"
      label="Email"
      autoComplete="email"
      helperText="in the format: example@domain.com"
      required
      rules={{ validate: { emailRequired, mustBeInValidEmailFormat } }}
    />
  );
};

export default LogInEmailInput;

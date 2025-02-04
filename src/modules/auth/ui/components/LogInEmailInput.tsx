import { ControlledTextField } from '@/modules/forms';
import {
  emailRequired,
  mustBeInValidEmailFormat,
  mustNotContainEmptySpaces,
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
      rules={{
        validate: {
          emailRequired,
          mustNotContainEmptySpaces,
          mustBeInValidEmailFormat,
        },
      }}
    />
  );
};

export default LogInEmailInput;

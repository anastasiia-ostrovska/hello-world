import { ControlledTextField } from '@/modules/forms';
import {
  passwordRequired,
  mustContainUppercase,
  mustContainDigit,
  mustContainSpecialCharacter,
  minLengthMustBe16,
} from '@/modules/forms/validators';

const LogInEmailInput = () => {
  return (
    <ControlledTextField
      type="password"
      name="password"
      label="Password"
      autoComplete="current-password"
      required
      helperText="16+ chars, uppercase, number and symbol"
      rules={{
        validate: {
          passwordRequired,
          mustContainUppercase,
          mustContainDigit,
          mustContainSpecialCharacter,
          minLengthMustBe16,
        },
      }}
    />
  );
};

export default LogInEmailInput;

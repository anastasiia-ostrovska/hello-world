import { ControlledInputProps } from '@/modules/forms/types';
import {
  passwordRequired,
  mustContainUppercase,
  mustContainDigit,
  mustContainSpecialCharacter,
  minLengthMustBe14,
  mustNotContainEmptySpaces,
} from '@/modules/forms/validators';
import ControlledTextField from './ControlledTextField';

const LogInEmailInput = ({ name }: Pick<ControlledInputProps, 'name'>) => {
  return (
    <ControlledTextField
      name={name}
      type="password"
      label="Password"
      autoComplete="current-password"
      required
      helperText="16+ chars, uppercase, number and symbol"
      rules={{
        validate: {
          passwordRequired,
          mustNotContainEmptySpaces,
          mustContainUppercase,
          mustContainDigit,
          mustContainSpecialCharacter,
          minLengthMustBe16: minLengthMustBe14,
        },
      }}
    />
  );
};

export default LogInEmailInput;

import { ControlledInputProps } from '@/modules/forms/types';
import {
  emailRequired,
  mustBeInValidEmailFormat,
  mustNotContainEmptySpaces,
} from '@/modules/forms/validators';
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

import { ControlledTextField } from '@shared/forms';
import { inputs } from '../config/input-items';

export const EmailInput = ({ isDisabled }: { isDisabled: boolean }) => {
  return <ControlledTextField {...inputs.email} disabled={isDisabled} />;
};

export const PasswordInput = ({ isDisabled }: { isDisabled: boolean }) => {
  return <ControlledTextField {...inputs.password} disabled={isDisabled} />;
};

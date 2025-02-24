import { LogInInputProps } from '@/modules/forms/types';
import { ControlledCheckbox } from '@/shared/forms';

const LogInCheckbox = ({ name, disabled }: LogInInputProps) => {
  return (
    <ControlledCheckbox
      name={name}
      label="Remember me"
      helperText="Stay logged in on this device"
      disabled={disabled}
    />
  );
};

export default LogInCheckbox;

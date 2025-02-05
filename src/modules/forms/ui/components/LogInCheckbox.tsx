import { ControlledInputProps } from '@/modules/forms/types';
import ControlledCheckbox from './ControlledCheckbox';

const LogInCheckbox = ({ name }: Pick<ControlledInputProps, 'name'>) => {
  return (
    <ControlledCheckbox
      name={name}
      label="Remember me"
      helperText="Stay logged in on this device"
    />
  );
};

export default LogInCheckbox;

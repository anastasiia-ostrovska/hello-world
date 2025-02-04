import { ControlledCheckbox } from '@/modules/forms';

const LogInCheckbox = () => {
  return (
    <ControlledCheckbox
      name="rememberMe"
      label="Remember me"
      helperText="Stay logged in on this device"
    />
  );
};

export default LogInCheckbox;

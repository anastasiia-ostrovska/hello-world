import { ControlledCheckbox } from '@/modules/forms';

interface LogInInputProps {
  name: string;
  label: string;
  helperText?: string;
}

const LogInCheckbox = ({ name, label, helperText = '' }: LogInInputProps) => {
  return (
    <ControlledCheckbox
      name={name}
      label={label}
      helperText={helperText}
      size="small"
    />
  );
};

export default LogInCheckbox;

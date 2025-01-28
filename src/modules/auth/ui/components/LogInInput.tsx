import { UseControllerProps } from 'react-hook-form';
import { ControlledTextField } from '@/modules/forms';

interface LogInInputProps {
  name: string;
  label: string;
  helperText: string;
  type: string;
  rules: UseControllerProps['rules'];
  required: boolean;
  autoComplete: string;
}

const LogInInput = ({
  name,
  label,
  helperText,
  type,
  rules,
  required,
  autoComplete,
}: LogInInputProps) => {
  return (
    <ControlledTextField
      name={name}
      type={type}
      helperText={helperText}
      rules={rules}
      fullWidth
      required={required}
      label={label}
      autoComplete={autoComplete}
    />
  );
};

export default LogInInput;

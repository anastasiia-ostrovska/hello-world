import {
  Controller,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import { TextField } from '@mui/material';

interface LogInInputProps {
  name: string;
  label: string;
  helperText: string;
  type: string;
  rules?: UseControllerProps['rules'];
  required?: boolean;
}

const LogInInput = ({
  name,
  label,
  helperText,
  type,
  rules = {},
  required = true,
}: LogInInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          fullWidth
          {...field}
          required={required}
          type={type}
          error={!!error}
          label={label}
          helperText={error ? error?.message : helperText}
        />
      )}
    />
  );
};

export default LogInInput;

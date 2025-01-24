import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

interface LogInInputProps {
  name: string;
  label: string;
  helperText: string;
}

const LogInInput = ({ name, label, helperText }: LogInInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField fullWidth {...field} label={label} helperText={helperText} />
      )}
    />
  );
};

export default LogInInput;

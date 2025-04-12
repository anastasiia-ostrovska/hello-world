import { TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import getHelperTextWithID from '../lib/getHelperTextWithID';
import { ControlledInputProps } from '../model/types';

interface ControlledTextFieldProps
  extends Omit<TextFieldProps, 'name' | 'helperText' | 'label'>,
    ControlledInputProps {
  type: string;
}

const ControlledTextField = ({
  name,
  type,
  label,
  helperText = '',
  required = true,
  showError = true,
  rules = {},
  ...textFieldMuiProps
}: ControlledTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        const { text } = getHelperTextWithID({
          name,
          error,
          showError,
          helperText,
        });

        return (
          <TextField
            {...textFieldMuiProps}
            {...field}
            required={required}
            label={label}
            type={type}
            error={!!error}
            helperText={text}
          />
        );
      }}
    />
  );
};

export default ControlledTextField;

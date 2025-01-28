import { TextFieldProps } from '@mui/material';
import {
  Controller,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface ControlledTextFieldProps extends Omit<TextFieldProps, 'name'> {
  name: string;
  type?: string;
  helperText?: string;
  showError?: boolean;
  rules?: UseControllerProps['rules'];
}

const ControlledTextField = ({
  name,
  type = 'text',
  helperText = '',
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
        const hasErrorToShow = showError && error;

        return (
          <TextField
            {...textFieldMuiProps}
            {...field}
            type={type}
            error={!!error}
            helperText={hasErrorToShow ? error.message : helperText}
          />
        );
      }}
    />
  );
};

export default ControlledTextField;

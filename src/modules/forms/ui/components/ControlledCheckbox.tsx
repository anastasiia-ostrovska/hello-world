import {
  Controller,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import { Styles } from '@/shared/types/mui-props';

interface ControlledCheckboxProps extends CheckboxProps {
  name: string;
  label: string;
  formControlSx?: Styles;
  helperText?: string;
  showError?: boolean;
  rules?: UseControllerProps['rules'];
}

const ControlledCheckbox = ({
  name,
  label,
  formControlSx = {},
  helperText = '',
  showError = true,
  rules = {},
  ...checkboxMuiProps
}: ControlledCheckboxProps) => {
  const { control } = useFormContext();

  return (
    <FormControl sx={{ ...formControlSx }}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => {
          const hasErrorToShow = showError && error;
          const helperTextId =
            hasErrorToShow || helperText ? `${name}-helper-text` : undefined;

          return (
            <>
              <FormControlLabel
                control={
                  <Checkbox
                    {...checkboxMuiProps}
                    {...field}
                    checked={!!field.value}
                    onChange={(event) => field.onChange(event.target.checked)}
                    aria-describedby={helperTextId}
                  />
                }
                label={label}
              />
              <FormHelperText id={helperTextId}>
                {hasErrorToShow ? error.message : helperText}
              </FormHelperText>
            </>
          );
        }}
      />
    </FormControl>
  );
};

export default ControlledCheckbox;

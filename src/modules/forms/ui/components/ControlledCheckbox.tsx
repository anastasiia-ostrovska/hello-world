import { Styles } from '@/shared/types/mui-props';
import { ControlledInputProps } from '@/modules/forms/types';
import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';

interface ControlledCheckboxProps
  extends Omit<CheckboxProps, 'name'>,
    ControlledInputProps {
  wrapperSx?: Styles;
}

const ControlledCheckbox = ({
  name,
  label,
  wrapperSx = {},
  helperText = '',
  showError = true,
  rules = {},
  ...checkboxMuiProps
}: ControlledCheckboxProps) => {
  const { control } = useFormContext();

  return (
    <FormControl sx={{ ...wrapperSx }}>
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

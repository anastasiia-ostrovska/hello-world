import { Styles } from '@/shared/mui';
import { ControlledInputProps } from '@/modules/forms/types';
import { Controller, useFormContext } from 'react-hook-form';
import getHelperTextWithID from '@/modules/forms/helpers/getHelperTextWithID';
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
  required = true,
  wrapperSx = {},
  helperText = '',
  showError = true,
  rules = {},
  ...checkboxMuiProps
}: ControlledCheckboxProps) => {
  const { control } = useFormContext();

  return (
    <FormControl sx={wrapperSx}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => {
          const { text, id } = getHelperTextWithID({
            name,
            error,
            showError,
            helperText,
          });

          return (
            <>
              <FormControlLabel
                required={required}
                control={
                  <Checkbox
                    {...checkboxMuiProps}
                    {...field}
                    checked={!!field.value}
                    onChange={(event) => field.onChange(event.target.checked)}
                    aria-describedby={id}
                    aria-invalid={!!error}
                  />
                }
                label={label}
              />
              {!!text && (
                <FormHelperText id={id} error={!!error}>
                  {text}
                </FormHelperText>
              )}
            </>
          );
        }}
      />
    </FormControl>
  );
};

export default ControlledCheckbox;

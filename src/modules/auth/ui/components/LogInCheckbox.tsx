import { Controller, useFormContext } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

interface LogInInputProps {
  name: string;
  label: string;
  helperText: string;
}

const LogInCheckbox = ({ name, label, helperText }: LogInInputProps) => {
  const { control } = useFormContext();

  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={!!field.value}
                onChange={(event) => field.onChange(event.target.checked)}
                size="small"
                aria-describedby={`${name}-helper-text`}
              />
            }
            label={label}
          />
        )}
      />
      <FormHelperText id={`${name}-helper-text`}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default LogInCheckbox;

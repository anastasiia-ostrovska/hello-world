import { LogInInputProps } from '@/modules/auth/types';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

const LogInInput = ({
  id,
  label,
  type,
  error,
  helperText,
  sx = {},
}: LogInInputProps) => {
  return (
    <FormControl
      required
      fullWidth
      error={error}
      margin="normal"
      variant="outlined"
      sx={{ ...sx }}
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={type}
        label="Password"
        aria-describedby={`${id}-helper-text`}
      />
      <FormHelperText id={`${id}-helper-text`}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default LogInInput;

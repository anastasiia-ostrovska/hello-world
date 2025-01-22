import { LogInInputProps } from '@/modules/auth/types';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

const LogInCheckbox = ({
  id,
  label,
  helperText,
  sx = {},
}: Omit<LogInInputProps, 'type' | 'error'>) => {
  return (
    <FormControl sx={{ ...sx }}>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            size="small"
            aria-describedby={`${id}-helper-text`}
          />
        }
        label={label}
      />
      <FormHelperText id={`${id}-helper-text`}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default LogInCheckbox;

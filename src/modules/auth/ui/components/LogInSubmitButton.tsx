import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '@mui/material/Button';

const LogInSubmitButton = () => {
  const {
    formState: { isSubmitting, isValid },
  } = useFormContext();

  const isDisabled = useMemo(() => {
    return isSubmitting || !isValid;
  }, [isValid, isSubmitting]);

  return (
    <Button
      type="submit"
      variant="contained"
      disabled={isDisabled}
      sx={{ mt: 8 }}
    >
      Log in
    </Button>
  );
};

export default LogInSubmitButton;

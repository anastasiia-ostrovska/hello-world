import Button from '@mui/material/Button';

const LogInSubmitButton = ({ isDisabled }: { isDisabled: boolean }) => {
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

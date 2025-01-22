import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LogInInput from '@/modules/auth/ui/components/LogInInput';
import LogInCheckbox from '@/modules/auth/ui/components/LogInCheckbox';
import Button from '@mui/material/Button';

const LogInForm = () => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Stack component="form" noValidate spacing={4} sx={{ width: '100%' }}>
        <Typography variant="h5">Log in</Typography>
        <Stack spacing={2}>
          <LogInInput
            id="email"
            label="Email"
            type="email"
            error={false}
            helperText="e.g., example@mail.com"
          />
          <LogInInput
            id="password"
            label="Password"
            type="password"
            error={false}
            helperText="8+ chars, uppercase, number and symbol"
          />
          <LogInCheckbox
            id="remember-me"
            label="Remember me"
            helperText="Stay logged in on this device"
          />
        </Stack>
        <Button type="submit" variant="contained" sx={{ mt: 8 }}>
          Log in
        </Button>
      </Stack>
    </Paper>
  );
};

export default LogInForm;

import { FormProvider, useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DevTool } from '@hookform/devtools';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LogInInput from '@/modules/auth/ui/components/LogInInput';
import LogInCheckbox from '@/modules/auth/ui/components/LogInCheckbox';
import Button from '@mui/material/Button';

interface LogInData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LogInForm = () => {
  const methods = useForm<LogInData>({
    defaultValues: { email: '', password: '', rememberMe: true },
  });
  const { control, handleSubmit } = methods;

  const onSubmit = (data: LogInData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Stack
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          spacing={4}
          sx={{ width: '100%' }}
        >
          <Typography variant="h5">Log in</Typography>
          <Stack spacing={2}>
            <LogInInput
              name="email"
              label="Email"
              helperText="e.g., example@mail.com"
            />
            <LogInInput
              name="password"
              label="Password"
              helperText="8+ chars, uppercase, number and symbol"
            />
            <LogInCheckbox
              name="rememberMe"
              label="Remember me"
              helperText="Stay logged in on this device"
            />
          </Stack>
          <Button type="submit" variant="contained" sx={{ mt: 8 }}>
            Log in
          </Button>
        </Stack>
        <DevTool control={control} /> {/* set up the dev tool */}
      </Paper>
    </FormProvider>
  );
};

export default LogInForm;

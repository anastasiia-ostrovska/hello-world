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
    delayError: 500,
    mode: 'onTouched',
  });
  const { control, handleSubmit } = methods;

  const onSubmit = (data: LogInData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Paper elevation={2} sx={{ width: 300, p: 2 }}>
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
              type="email"
              name="email"
              label="Email"
              helperText="in the format: example@domain.com"
              rules={{
                required: 'Please, enter your email',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:
                    'Please enter a valid email address in the format: example@domain.com.',
                },
              }}
            />
            <LogInInput
              type="password"
              name="password"
              label="Password"
              helperText="16+ chars, uppercase, number and symbol"
              rules={{
                required: 'Please, enter your password',
                validate: {
                  containsUppercase: (value: string) =>
                    /[A-Z]/.test(value) ||
                    'Your password must contain at least one uppercase letter.',
                  containsDigit: (value: string) =>
                    /\d/.test(value) ||
                    'Your password must contain at least one digit.',
                  containsSpecialCharacter: (value: string) =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                    'Your password must contain at least one special character.',
                  minLength: (value: string) => {
                    return (
                      value.length >= 16 ||
                      'Your password must be at least 16 characters long.'
                    );
                  },
                },
              }}
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

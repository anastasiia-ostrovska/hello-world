import { FormProvider, useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DevTool } from '@hookform/devtools';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LogInEmailInput from '@/modules/auth/ui/components/LogInEmailInput';
import LogInPasswordInput from '@/modules/auth/ui/components/LogInPasswordInput';
import LogInCheckbox from '@/modules/auth/ui/components/LogInCheckbox';
import LogInSubmitButton from '@/modules/auth/ui/components/LogInSubmitButton';

interface LogInData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LogInForm = () => {
  const methods = useForm<LogInData>({
    defaultValues: { email: '', password: '', rememberMe: true },
    delayError: 300,
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
            <LogInEmailInput />
            <LogInPasswordInput />
            <LogInCheckbox />
          </Stack>
          <LogInSubmitButton />
        </Stack>
        <DevTool control={control} /> {/* set up the dev tool */}
      </Paper>
    </FormProvider>
  );
};

export default LogInForm;

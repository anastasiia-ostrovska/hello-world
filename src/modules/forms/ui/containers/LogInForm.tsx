import { BaseSyntheticEvent } from 'react';
import Stack from '@mui/material/Stack';
import LogInEmailInput from '@/modules/forms/ui/components/LogInEmailInput';
import LogInPasswordInput from '@/modules/forms/ui/components/LogInPasswordInput';
import LogInCheckbox from '@/modules/forms/ui/components/LogInCheckbox';
import SubmitButton from '@/modules/forms/ui/components/SubmitButton';

interface LogInFormProps {
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  isButtonDisabled: boolean;
  isLogInRequestLoading: boolean;
}

const LogInForm = ({
  onSubmit,
  isButtonDisabled,
  isLogInRequestLoading,
}: LogInFormProps) => {
  return (
    <Stack
      component="form"
      onSubmit={onSubmit}
      noValidate
      spacing={3}
      sx={{ width: '100%' }}
    >
      <Stack spacing={2}>
        <LogInEmailInput name="email" disabled={isLogInRequestLoading} />
        <LogInPasswordInput name="password" disabled={isLogInRequestLoading} />
        <LogInCheckbox name="rememberMe" disabled={isLogInRequestLoading} />
      </Stack>
      <SubmitButton disabled={isButtonDisabled}>Log in</SubmitButton>
    </Stack>
  );
};

export default LogInForm;

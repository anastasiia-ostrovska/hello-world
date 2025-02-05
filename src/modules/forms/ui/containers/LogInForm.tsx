import { BaseSyntheticEvent } from 'react';
import Stack from '@mui/material/Stack';
import SectionWrapper from '@/layout/ui/components/SectionWrapper';
import LogInEmailInput from '@/modules/forms/ui/components/LogInEmailInput';
import LogInPasswordInput from '@/modules/forms/ui/components/LogInPasswordInput';
import LogInCheckbox from '@/modules/forms/ui/components/LogInCheckbox';
import LogInSubmitButton from '@/modules/forms/ui/components/LogInSubmitButton';

interface LogInFormProps {
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  isButtonDisabled: boolean;
}

const LogInForm = ({ onSubmit, isButtonDisabled }: LogInFormProps) => {
  return (
    <SectionWrapper>
      <Stack
        component="form"
        onSubmit={onSubmit}
        noValidate
        spacing={4}
        sx={{ width: '100%' }}
      >
        <Stack spacing={2}>
          <LogInEmailInput name="email" />
          <LogInPasswordInput name="password" />
          <LogInCheckbox name="rememberMe" />
        </Stack>
        <LogInSubmitButton isDisabled={isButtonDisabled} />
      </Stack>
    </SectionWrapper>
  );
};

export default LogInForm;

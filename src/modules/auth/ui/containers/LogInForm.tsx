import { SubmitHandler, useFormContext } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import LogInEmailInput from '@/modules/auth/ui/components/LogInEmailInput';
import LogInPasswordInput from '@/modules/auth/ui/components/LogInPasswordInput';
import LogInCheckbox from '@/modules/auth/ui/components/LogInCheckbox';
import LogInSubmitButton from '@/modules/auth/ui/components/LogInSubmitButton';
import { LogInData } from '@/modules/auth/types';
import SectionWrapper from '../../../../layout/ui/components/SectionWrapper';

interface LogInFormProps {
  onSubmit: SubmitHandler<LogInData>;
  isButtonDisabled: boolean;
}

const LogInForm = ({ onSubmit, isButtonDisabled }: LogInFormProps) => {
  const { handleSubmit } = useFormContext<LogInData>();

  return (
    <SectionWrapper>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        spacing={4}
        sx={{ width: '100%' }}
      >
        <Stack spacing={2}>
          <LogInEmailInput />
          <LogInPasswordInput />
          <LogInCheckbox />
        </Stack>
        <LogInSubmitButton isDisabled={isButtonDisabled} />
      </Stack>
    </SectionWrapper>
  );
};

export default LogInForm;

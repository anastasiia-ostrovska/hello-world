import { useMemo } from 'react';
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
}

const LogInForm = ({ onSubmit }: LogInFormProps) => {
  const {
    handleSubmit,
    formState: { dirtyFields, isSubmitting },
  } = useFormContext<LogInData>();

  const isDisabled = useMemo(() => {
    const isEmptyField = !dirtyFields.email || !dirtyFields.password;
    return isEmptyField || isSubmitting;
  }, [dirtyFields.email, dirtyFields.password, isSubmitting]);

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
        <LogInSubmitButton isDisabled={isDisabled} />
      </Stack>
    </SectionWrapper>
  );
};

export default LogInForm;

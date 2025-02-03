import { FormProvider, useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DevTool } from '@hookform/devtools';
import { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import SectionWrapper from '@/layout/ui/components/SectionWrapper';
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
  const {
    control,
    handleSubmit,
    setValue,
    formState: { dirtyFields, errors, isSubmitting },
  } = methods;

  const isDisabled = useMemo(() => {
    const isEmptyField = !dirtyFields.email || !dirtyFields.password;
    const hasError = Object.keys(errors).length > 0;

    return isEmptyField || hasError || isSubmitting;
  }, [dirtyFields.email, dirtyFields.password, errors, isSubmitting]);

  const onSubmit = (data: LogInData) => {
    console.log(data);
  };

  const handleFillGuestData = () => {
    const encodedPassword = encodeURIComponent(
      import.meta.env.VITE_GUEST_PASSWORD
    );

    setValue('email', import.meta.env.VITE_GUEST_EMAIL, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue('password', encodedPassword, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <FormProvider {...methods}>
      <Stack spacing={1} sx={{ maxWidth: 350, width: '100%' }}>
        <Typography variant="h5" sx={{ alignSelf: 'center' }}>
          Log in
        </Typography>
        <SectionWrapper
          sx={{ flexDirection: 'column', gap: 1, alignItems: 'center' }}
        >
          <Typography
            variant="caption"
            color="success"
            sx={{ textAlign: 'center' }}
          >
            * Please, use the Guest credentials to log in.
          </Typography>
          <Chip
            component="button"
            label="Fill with Guest Data"
            color="success"
            variant="outlined"
            onClick={handleFillGuestData}
            sx={{ cursor: 'pointer' }}
          />
        </SectionWrapper>
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
          <DevTool control={control} /> {/* set up the dev tool */}
        </SectionWrapper>
      </Stack>
    </FormProvider>
  );
};

export default LogInForm;

import { ReactElement, ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SectionWrapper from '@shared/ui/SectionWrapper';
import { ErrorMessage } from '@shared/error-message';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';

interface LogInFormLayoutProps {
  heading: string;
  guestData: ReactElement;
  error: ErrorMessage | undefined;
  children: ReactNode;
}

export const LogInFormLayout = ({
  heading,
  guestData,
  error,
  children,
}: LogInFormLayoutProps) => {
  return (
    <Stack spacing={1} sx={{ maxWidth: 300, width: '100%' }}>
      <Typography variant="h5" component="h1" sx={{ alignSelf: 'center' }}>
        {heading}
      </Typography>
      <SectionWrapper
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {guestData}
      </SectionWrapper>
      {!!error && (
        <Alert severity="error" variant="outlined">
          {!!error.title && <AlertTitle> {error.title}</AlertTitle>}
          {error.message}
        </Alert>
      )}
      <SectionWrapper>{children}</SectionWrapper>
    </Stack>
  );
};

interface GuestDataLayoutProps {
  text: string;
  button: ReactElement;
}

export const GuestDataLayout = ({ text, button }: GuestDataLayoutProps) => {
  return (
    <>
      <Typography
        variant="caption"
        color="success"
        sx={{ textAlign: 'center' }}
      >
        {text}
      </Typography>
      {button}
    </>
  );
};

interface InputsLayoutProps {
  email: ReactElement;
  password: ReactElement;
}

export const InputsLayout = ({ email, password }: InputsLayoutProps) => {
  return (
    <Stack spacing={2}>
      {email}
      {password}
    </Stack>
  );
};

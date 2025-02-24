import { ReactElement, ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SectionWrapper from '@/shared/ui/SectionWrapper';

interface LogInFormLayoutProps {
  heading: string;
  guestData: ReactElement;
  children: ReactNode;
}

export const LogInFormLayout = ({
  heading,
  guestData,
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

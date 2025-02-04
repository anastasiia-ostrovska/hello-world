import { useFormContext } from 'react-hook-form';
import { LogInData } from '@/modules/auth/types';
import Typography from '@mui/material/Typography';
import FillGuestDataButton from '@/modules/auth/ui/components/FillGuestDataButton';
import SectionWrapper from '@/layout/ui/components/SectionWrapper';

const GuestCredentials = () => {
  const { setValue } = useFormContext<LogInData>();

  const handleFillGuestData = () => {
    setValue('email', import.meta.env.VITE_GUEST_EMAIL, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue('password', import.meta.env.VITE_GUEST_PASSWORD, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <SectionWrapper
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Typography
        variant="caption"
        color="success"
        sx={{ textAlign: 'center' }}
      >
        * Please, use the Guest credentials to log in.
      </Typography>
      <FillGuestDataButton onClick={handleFillGuestData} />
    </SectionWrapper>
  );
};

export default GuestCredentials;

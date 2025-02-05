import Typography from '@mui/material/Typography';
import FillGuestDataButton from '@/modules/auth/ui/components/FillGuestDataButton';
import SectionWrapper from '@/layout/ui/components/SectionWrapper';

interface GuestCredentialsProps {
  onClick: () => void;
}

const GuestCredentials = ({ onClick }: GuestCredentialsProps) => {
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
      <FillGuestDataButton onClick={onClick} />
    </SectionWrapper>
  );
};

export default GuestCredentials;

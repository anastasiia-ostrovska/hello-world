import Chip from '@mui/material/Chip';

interface FillGuestDataButtonProps {
  onClick: () => void;
}

const FillGuestDataButton = ({ onClick }: FillGuestDataButtonProps) => {
  return (
    <Chip
      component="button"
      label="Fill with Guest Data"
      color="success"
      variant="outlined"
      onClick={onClick}
      sx={{ cursor: 'pointer' }}
    />
  );
};

export default FillGuestDataButton;

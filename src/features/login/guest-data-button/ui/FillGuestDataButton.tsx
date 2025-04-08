import Chip from '@mui/material/Chip';
import useFillFormWithGuestData from '@features/login/guest-data-button/model/useFillFormWithGuestData';

const FillGuestDataButton = () => {
  const handleFillGuestData = useFillFormWithGuestData();

  return (
    <Chip
      component="button"
      label="Fill with Guest Data"
      color="success"
      variant="outlined"
      onClick={handleFillGuestData}
      sx={{ cursor: 'pointer' }}
    />
  );
};

export default FillGuestDataButton;

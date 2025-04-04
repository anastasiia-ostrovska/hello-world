import { useFormContext } from 'react-hook-form';
import { LoginField } from '@entities/session';

const useFillFormWithGuestData = () => {
  const { reset } = useFormContext();

  const handleFillGuestData = () => {
    reset(
      {
        [LoginField.Email]: import.meta.env.VITE_GUEST_EMAIL,
        [LoginField.Password]: import.meta.env.VITE_GUEST_PASSWORD,
      },
      {
        keepDefaultValues: true,
        keepTouched: true,
      }
    );
  };

  return handleFillGuestData;
};

export default useFillFormWithGuestData;

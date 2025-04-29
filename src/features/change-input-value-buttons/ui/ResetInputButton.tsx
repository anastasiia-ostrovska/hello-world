import { useFormContext } from 'react-hook-form';
import { ButtonProps } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import Button from '@mui/material/Button';

interface ResetInputButtonProps extends ButtonProps {
  label: string;
  inputName: string;
}

const ResetInputButton = ({
  label,
  inputName,
  ...buttonProps
}: ResetInputButtonProps) => {
  const { resetField } = useFormContext();

  const handleResetInput = () => {
    resetField(inputName);
  };

  return (
    <Button
      size="small"
      variant="outlined"
      aria-label={label}
      startIcon={<UndoIcon />}
      onClick={handleResetInput}
      {...buttonProps}
    >
      {label}
    </Button>
  );
};

export default ResetInputButton;

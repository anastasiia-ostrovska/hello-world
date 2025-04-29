import { useFormContext } from 'react-hook-form';
import { ButtonProps } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

interface SetInputValueButtonProps extends ButtonProps {
  label: string;
  inputName: string;
  newValue: unknown;
}

const SetInputValueButton = ({
  label,
  inputName,
  newValue,
  ...buttonProps
}: SetInputValueButtonProps) => {
  const { setValue } = useFormContext();
  const handleSetValue = () => {
    setValue(inputName, newValue);
  };

  return (
    <Button
      size="small"
      variant="outlined"
      aria-label={label}
      startIcon={<DeleteIcon />}
      onClick={handleSetValue}
      {...buttonProps}
    >
      {label}
    </Button>
  );
};

export default SetInputValueButton;

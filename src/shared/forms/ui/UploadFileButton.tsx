import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ControlledTextField from './ControlledTextField';
import { UploadFileButtonProps } from '../model/types';

const defaultIcon = <CloudUploadIcon />;

const UploadFileButton = ({
  name,
  accept = 'image/*',
  label = 'Upload file',
  buttonSize = 'small',
  buttonSX = {},
  startIcon = defaultIcon,
  ...textFieldMuiProps
}: UploadFileButtonProps) => {
  return (
    <Button
      component="label"
      variant="outlined"
      role={undefined}
      size={buttonSize}
      tabIndex={-1}
      startIcon={startIcon}
      sx={{ ...buttonSX }}
    >
      {label}
      <ControlledTextField
        name={name}
        type="file"
        slotProps={{ htmlInput: { accept } }}
        sx={{ display: 'none' }}
        {...textFieldMuiProps}
      />
    </Button>
  );
};

export default UploadFileButton;

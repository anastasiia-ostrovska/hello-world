import { ReactNode } from 'react';
import { Stack } from '@mui/material';
import { UploadFileButton } from '@shared/forms';
import {
  ResetInputButton,
  SetInputValueButton,
} from '@features/change-input-value-buttons';

const EditPhotoControlsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        width: '100%',
        maxWidth: 300,
        justifyContent: 'space-between',
        justifySelf: 'end',
      }}
    >
      {children}
    </Stack>
  );
};

interface EditPhotoControlsProps {
  inputName: string;
  uploadLabel: string;
}

const EditPhotoControls = ({
  inputName,
  uploadLabel,
}: EditPhotoControlsProps) => {
  return (
    <EditPhotoControlsLayout>
      <UploadFileButton
        inputName={inputName}
        label={uploadLabel}
        sx={{ minWidth: 95 }}
      />
      <ResetInputButton inputName={inputName} label="Reset" />
      <SetInputValueButton
        label="Delete"
        inputName={inputName}
        newValue={null}
      />
    </EditPhotoControlsLayout>
  );
};

export default EditPhotoControls;

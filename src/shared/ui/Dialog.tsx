import MUIDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useMediaQueryState } from '@shared/lib';
import { ReactNode } from 'react';

interface ScrollDialogProps {
  isOpen: boolean;
  title: ReactNode;
  content: ReactNode;
  actions?: ReactNode;
  onDialogClose: () => void;
  withTitleDivider?: boolean;
  withActionsDivider?: boolean;
}

const Dialog = ({
  isOpen,
  title,
  content,
  onDialogClose,
  actions = null,
  withTitleDivider = false,
  withActionsDivider = false,
}: ScrollDialogProps) => {
  const { isUpSM } = useMediaQueryState();

  return (
    <MUIDialog
      fullScreen={!isUpSM}
      open={isOpen}
      onClose={onDialogClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <Stack
        direction="row"
        sx={{ justifyContent: 'space-between', alignItems: 'center', px: 2 }}
      >
        <DialogTitle id="dialog-title" sx={{ px: 0 }}>
          {title}
        </DialogTitle>
        <IconButton
          aria-label="Close"
          onClick={onDialogClose}
          sx={{ mr: '-8px' }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      {withTitleDivider && <Divider />}
      <DialogContent sx={{ px: 2 }}>{content}</DialogContent>
      {withActionsDivider && <Divider />}
      {!!actions && <DialogActions sx={{ px: 2 }}>{actions}</DialogActions>}
    </MUIDialog>
  );
};

export default Dialog;

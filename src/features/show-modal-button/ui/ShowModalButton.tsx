import { ReactNode, useState } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { Modal } from '@shared/ui';

interface ShowModalButtonProps extends BoxProps {
  showModalButton: ReactNode;
  modalTitle: ReactNode;
  modalContent: ReactNode;
  modalActions?: ReactNode;
  withTitleDivider?: boolean;
  withActionsDivider?: boolean;
  onButtonClick?: () => void;
}

const ShowModalButton = ({
  showModalButton,
  modalTitle,
  modalContent,
  modalActions = null,
  withTitleDivider = false,
  withActionsDivider = false,
  onButtonClick,
  ...boxProps
}: ShowModalButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setIsOpen(true);
    onButtonClick?.();
  };
  const handleDialogClose = () => setIsOpen(false);

  return (
    <>
      <Box {...boxProps} onClick={handleDialogOpen}>
        {showModalButton}
      </Box>
      <Modal
        isOpen={isOpen}
        title={modalTitle}
        content={modalContent}
        actions={modalActions}
        withTitleDivider={withTitleDivider}
        withActionsDivider={withActionsDivider}
        onClose={handleDialogClose}
      />
    </>
  );
};

export default ShowModalButton;

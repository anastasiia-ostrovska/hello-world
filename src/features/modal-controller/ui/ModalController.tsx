import { useAppSelector } from '@shared/model';
import { Modal } from '@shared/ui';
import { selectModalState, useModalController } from '@entities/modal';

const ModalController = () => {
  const { hideModal } = useModalController();
  const { isOpen, modalProps } = useAppSelector(selectModalState);

  if (!isOpen || !modalProps) return null;

  return <Modal onClose={hideModal} {...modalProps} />;
};

export default ModalController;

import { useAppSelector } from '@shared/model';
import { Modal } from '@shared/ui';
import { selectModalState, useModalController } from '@entities/modal';

/**
 * ModalController is a functional component responsible for rendering
 * a Modal when a modal-related state indicates it should be displayed.
 *
 * This component uses the `useModalController` hook to retrieve the `hideModal`
 * function, which is responsible for closing the modal. It also uses
 * `useAppSelector` to access the current modal state (`isOpen` and `modalProps`)
 * from the application's state.
 *
 * If the modal is not open (`isOpen` is false) or there are no modal
 * properties (`modalProps` is null), this component returns `null`
 * and does not render any UI.
 *
 * When the modal is open, the component renders a `Modal` element with
 * the `isOpen` and `onClose` properties passed, alongside any additional
 * properties defined in `modalProps`.
 */

const ModalController = () => {
  const { hideModal } = useModalController();
  const { isOpen, modalProps } = useAppSelector(selectModalState);

  if (!isOpen || !modalProps) return null;

  return <Modal isOpen={isOpen} onClose={hideModal} {...modalProps} />;
};

export default ModalController;

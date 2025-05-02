import { useModalController } from '@entities/modal';
import { ProfilePhotosEditor } from '@widgets/profile-photos-editor';
import { ContactsInfo } from '@widgets/contacts-info';
import { MODAL_HEADINGS } from '../consts/modal-headings';
import { UseProfileModalsResult } from '../modal/types';

/**
 * A utility function that provides modal handlers for managing profile-related modals.
 *
 * @param {Object} params - The parameters for configuration.
 * @param {string} params.userId - The unique identifier of the user for whom the modals are configured.
 * @returns {UseProfileModalsResult} An object containing functions to show various profile-related modals:
 * - `handleShowPhotosEditorModal`: Opens a modal for editing the user's profile photos.
 * - `handleShowContactsModal`: Opens a modal displaying the user's contact information with a title divider.
 * - `handleShowDetailsEditorModal`: Opens a modal for modifying profile details with a title divider.
 */

export const useProfileModals = ({
  userId,
}: {
  userId: string;
}): UseProfileModalsResult => {
  const { showModal } = useModalController();

  const handleShowPhotosEditorModal = (): void => {
    showModal({
      title: MODAL_HEADINGS.photosEditor,
      content: <ProfilePhotosEditor userId={userId} />,
    });
  };

  const handleShowDetailsEditorModal = (): void => {
    showModal({
      title: MODAL_HEADINGS.detailsEditor,
      content: <div>Profile details editor</div>,
      withTitleDivider: true,
    });
  };

  const handleShowContactsModal = (): void => {
    showModal({
      title: MODAL_HEADINGS.contacts,
      content: <ContactsInfo userId={userId} />,
      withTitleDivider: true,
    });
  };

  return {
    handleShowPhotosEditorModal,
    handleShowContactsModal,
    handleShowDetailsEditorModal,
  };
};

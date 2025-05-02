import { useParams } from 'react-router-dom';
import { useProfileModals } from '../lib/useProfileModals';
import { UseProfileModalsResult } from './types';

interface UseProfilePageResult extends UseProfileModalsResult {
  userId: string;
}

/**
 * A custom React hook that provides utility functions and the user ID for the profile page.
 *
 * This hook extracts the `userId` from the current route parameters and prepares it for use.
 * It also provides functions to handle specific modals for editing photos, details,
 * and contacts on the profile page.
 *
 * @returns {UseProfilePageResult} An object containing the `userId` and modal handling functions.
 */

export const useProfilePage = (): UseProfilePageResult => {
  const { userId } = useParams();
  const currentId = userId || '';
  const {
    handleShowPhotosEditorModal,
    handleShowDetailsEditorModal,
    handleShowContactsModal,
  } = useProfileModals({ userId: currentId });

  return {
    userId: currentId,
    handleShowPhotosEditorModal,
    handleShowContactsModal,
    handleShowDetailsEditorModal,
  };
};

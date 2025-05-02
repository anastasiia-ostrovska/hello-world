import { useModalController } from '@entities/modal';
import ProfilePhotosEditor from '../ui/ProfilePhotosEditor';

type ShowPhotosEditorHandler = (userId: string) => void;
const TITLE = 'Profile images editor';

/**
 * A custom hook that provides functionality to display a modal for editing profile photos.
 *
 * @function
 * @returns {Object} An object containing the `showPhotosEditor` function - a handler function to show the photo editor modal.
 *
 * The `showPhotosEditor` function takes a user ID as an argument and displays a modal with
 * the `ProfilePhotosEditor` component as its content.
 */

export const useShowPhotosEditor = (): {
  showPhotosEditor: ShowPhotosEditorHandler;
} => {
  const { showModal } = useModalController();

  const showPhotosEditor: ShowPhotosEditorHandler = (userId) => {
    showModal({
      title: TITLE,
      content: <ProfilePhotosEditor userId={userId} />,
    });
  };

  return { showPhotosEditor };
};

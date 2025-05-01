import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '@shared/model';
import { getIsFileList } from '@shared/lib';
import { useModalController } from '@entities/modal';
import {
  PhotoAction,
  PhotoLabel,
  UploadedPhotos,
  useUpdateUserMutation,
  useUserWithFallback,
} from '@entities/user';
import {
  addNotification,
  createSuccessNotificationElement,
  useErrorPopupNotification,
} from '@entities/notification';
import { DEFAULT_IMAGE_INPUT_VALUES } from '../consts/default-image-input-values';
import { UsePhotosEditorResult } from './types';

/**
 * Custom hook to manage and edit user photos (e.g., avatar, background) in the application.
 *
 * This hook provides the necessary state, handlers, and utilities for photo management
 * on a user profile, including form state handling, submission logic, and error handling.
 * It integrates with user data fetching, photo update mutations, and notification dispatching.
 *
 * @param {Object} params - Parameters required by the hook.
 * @param {string} params.userId - The ID of the user whose photos are being edited.
 * @returns {UsePhotosEditorResult} An object containing user data, form methods, action statuses,
 * and a handler for applying changes to the photos.
 */

export const usePhotosEditor = ({
  userId,
}: {
  userId: string;
}): UsePhotosEditorResult => {
  const {
    user,
    error: userError,
    isError: isUserError,
    isLoading: isUserLoading,
  } = useUserWithFallback({ userId });
  const methods = useForm<UploadedPhotos>({
    defaultValues: DEFAULT_IMAGE_INPUT_VALUES,
  });
  const {
    reset,
    handleSubmit,
    formState: { dirtyFields, isSubmitSuccessful },
  } = methods;
  const [
    updatePhotos,
    {
      isLoading: isUpdating,
      error: updateError,
      isSuccess: isUpdateSuccessful,
    },
  ] = useUpdateUserMutation();
  useErrorPopupNotification({ error: userError || updateError });

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isSubmitSuccessful && isUpdateSuccessful) {
      const successNotification = createSuccessNotificationElement({
        message: 'Images updated successfully',
      });
      dispatch(addNotification(successNotification));
      reset();
    }
  }, [dispatch, isSubmitSuccessful, isUpdateSuccessful, reset]);

  const isFormEmpty =
    !dirtyFields[PhotoLabel.Avatar] && !dirtyFields[PhotoLabel.Background];
  const isActionDisabled = isUserError || isUserLoading || isUpdating;
  const isApplyDisabled = isActionDisabled || isFormEmpty;

  const handleApplyChanges: SubmitHandler<UploadedPhotos> = (data) => {
    const formData = new FormData();

    const processPhoto = (photoLabel: PhotoLabel) => {
      if (!dirtyFields[photoLabel]) return;

      const value = data[photoLabel];
      if (value === undefined) return;

      if (getIsFileList(value) && value.length > 0) {
        const file = value[0];
        formData.append(photoLabel, file);
      } else if (value === PhotoAction.Delete) {
        formData.append(photoLabel, value);
      }
    };

    processPhoto(PhotoLabel.Avatar);
    processPhoto(PhotoLabel.Background);

    updatePhotos(formData);
  };

  return {
    user,
    methods,
    isActionDisabled,
    isApplyDisabled,
    handleApplyChanges: handleSubmit(handleApplyChanges),
  };
};

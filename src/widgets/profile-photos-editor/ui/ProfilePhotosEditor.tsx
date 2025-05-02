import { PhotoLabel } from '@entities/user';
import { Form, SubmitButton } from '@shared/forms';
import { FormProvider } from 'react-hook-form';
import { PhotosEditorPreview } from '@features/user';
import { usePhotosEditor } from '../model/usePhotosEditor';
import EditPhotoControls from './EditPhotoControls';
import ProfilePhotosEditorLayout from './ProfilePhotosEditorLayout';

const ProfilePhotosEditor = ({ userId }: { userId: string }) => {
  const {
    user,
    methods,
    isActionDisabled,
    isApplyDisabled,
    handleApplyChanges,
  } = usePhotosEditor({ userId });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleApplyChanges}>
        <ProfilePhotosEditorLayout
          imagesBlock={
            <PhotosEditorPreview
              name={user.name}
              photos={user.photos}
              imagesSize={100}
            />
          }
          avatarInputActions={
            <EditPhotoControls
              inputName={PhotoLabel.Avatar}
              uploadLabel="Avatar"
              isDisabled={isActionDisabled}
            />
          }
          bgInputActions={
            <EditPhotoControls
              inputName={PhotoLabel.Background}
              uploadLabel="Cover"
              isDisabled={isActionDisabled}
            />
          }
          applyButton={
            <SubmitButton size="small" disabled={isApplyDisabled} fullWidth>
              Apply all
            </SubmitButton>
          }
        />
      </Form>
    </FormProvider>
  );
};

export default ProfilePhotosEditor;

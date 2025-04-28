import { skipToken } from '@reduxjs/toolkit/query';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { SectionWrapper } from '@shared/ui';
import {
  AvatarPosition,
  AvatarWithBgImage,
  generateFakeUsers,
  useUserByIdQuery,
} from '@entities/user';
import { ReactElement } from 'react';
import { UploadFileButton } from '@shared/forms';
import { FormProvider, useForm } from 'react-hook-form';

interface ProfileImagesEditorLayoutProps {
  imagesBlock: ReactElement;
  uploadAvatarImgButton: ReactElement;
  uploadBgImgButton: ReactElement;
  applyButton: ReactElement;
}

const ProfileImagesEditorLayout = ({
  imagesBlock,
  uploadAvatarImgButton,
  uploadBgImgButton,
  applyButton,
}: ProfileImagesEditorLayoutProps) => {
  return (
    <Stack
      spacing={5}
      sx={{ width: { xs: '100%', sm: '80vw' }, maxWidth: { sm: 500 } }}
    >
      <SectionWrapper>{imagesBlock}</SectionWrapper>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2 }}
        alignSelf="end"
        width="fit-content"
      >
        {uploadAvatarImgButton}
        {uploadBgImgButton}
        <Divider orientation="vertical" flexItem />
        {applyButton}
      </Stack>
    </Stack>
  );
};

enum ProfilePhotos {
  Avatar = 'avatar',
  Background = 'background',
}

interface ProfilePhotosData {
  [ProfilePhotos.Avatar]: string;
  [ProfilePhotos.Background]: string;
}

const ProfilePhotosEditor = ({ userId }: { userId: string }) => {
  const { data } = useUserByIdQuery(userId ?? skipToken);
  const fakeUser = generateFakeUsers(1)[0];
  const user = data?.data || fakeUser;
  const { palette } = useTheme();

  const methods = useForm<ProfilePhotosData>({
    defaultValues: {
      [ProfilePhotos.Avatar]: '',
      [ProfilePhotos.Background]: '',
    },
    mode: 'onTouched',
  });

  return (
    <FormProvider {...methods}>
      <ProfileImagesEditorLayout
        imagesBlock={
          <AvatarWithBgImage
            name={user.name}
            avatarSrc={user.photos.avatar}
            bgImageSrc={user.photos.background}
            avatarSize={100}
            bgImageHeight={100}
            avatarPosition={AvatarPosition.Left}
            avatarBorderColor={palette.customBackground.sectionWrapper}
            avatarBorderWidth="4px"
            sx={{ mb: `${100 / 2}px` }}
          />
        }
        uploadAvatarImgButton={
          <UploadFileButton name="avatar" label="Avatar" />
        }
        uploadBgImgButton={<UploadFileButton name="background" label="Cover" />}
        applyButton={<Button size="small">Apply</Button>}
      />
    </FormProvider>
  );
};

export default ProfilePhotosEditor;

import { skipToken } from '@reduxjs/toolkit/query';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { SectionWrapper } from '@shared/ui';
import {
  AvatarPosition,
  AvatarWithBgImage,
  generateFakeUsers,
  useUserByIdQuery,
} from '@entities/user';
import { ReactElement } from 'react';

const InputFileUpload = ({ title }: { title: string }) => {
  return (
    <Button
      component="label"
      role={undefined}
      variant="outlined"
      size="small"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      {title}
      <TextField type="file" sx={{ display: 'none' }} />
    </Button>
  );
};

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
      spacing={4}
      sx={{ width: { xs: '100%', sm: '80vw' }, maxWidth: 500 }}
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

const ProfileImagesEditor = ({ userId }: { userId: string }) => {
  const { data } = useUserByIdQuery(userId ?? skipToken);
  const fakeUser = generateFakeUsers(1)[0];
  const user = data?.data || fakeUser;
  const { palette } = useTheme();

  return (
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
      uploadAvatarImgButton={<InputFileUpload title="Avatar" />}
      uploadBgImgButton={<InputFileUpload title="Cover" />}
      applyButton={<Button size="small">Apply</Button>}
    />
  );
};

export default ProfileImagesEditor;

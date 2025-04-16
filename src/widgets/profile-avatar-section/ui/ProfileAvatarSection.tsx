import { ReactElement } from 'react';
import { AvatarPosition, AvatarWithBgImage } from '@entities/user';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { EditButton } from '@shared/ui';
import { useImagesSize } from '../lib/useImagesSize';

interface ProfileAvatarSectionLayoutProps {
  showEditButton: boolean;
  photosBlock: ReactElement;
  editButton: ReactElement;
}

const ProfileAvatarSectionLayout = ({
  showEditButton,
  photosBlock,
  editButton,
}: ProfileAvatarSectionLayoutProps) => {
  return (
    <Box sx={{ position: 'relative', borderRadius: 'inherit' }}>
      {photosBlock}
      {showEditButton && editButton}
    </Box>
  );
};

interface ProfileAvatarSectionProps {
  name: string;
  avatarSrc: string;
  bgImageSrc: string;
  isMyProfile: boolean;
  isLoading: boolean;
}

const ProfileAvatarSection = ({
  name,
  avatarSrc,
  bgImageSrc,
  isMyProfile,
  isLoading,
}: ProfileAvatarSectionProps) => {
  const { imageSize } = useImagesSize();
  const { palette } = useTheme();

  return (
    <ProfileAvatarSectionLayout
      showEditButton={isMyProfile}
      photosBlock={
        <AvatarWithBgImage
          name={name}
          avatarSrc={avatarSrc}
          bgImageSrc={bgImageSrc}
          avatarSize={imageSize}
          bgImageHeight={imageSize}
          avatarPosition={AvatarPosition.Left}
          avatarBorderColor={palette.customBackground.sectionWrapper}
          avatarBorderWidth="4px"
          sx={{ mb: `${imageSize / 2}px` }}
        />
      }
      editButton={
        <EditButton
          tooltipTitle="Edit profile images"
          isDisabled={isLoading}
          onClick={() => {}}
          sx={{
            position: 'absolute',
            right: { xs: 4, sm: 8, md: 12 },
            top: imageSize + 10,
          }}
        />
      }
    />
  );
};

export default ProfileAvatarSection;

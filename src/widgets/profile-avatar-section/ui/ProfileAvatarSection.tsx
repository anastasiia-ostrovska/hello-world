import { ReactElement } from 'react';
import { AvatarPosition, AvatarWithBgImage } from '@entities/user';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
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
        <Tooltip title="Edit profile photos">
          <IconButton
            aria-label="delete"
            disabled={isLoading}
            size="small"
            sx={{
              position: 'absolute',
              right: { xs: 4, sm: 8, md: 12 },
              top: imageSize + 10,
              color: 'text.secondary',
            }}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
      }
    />
  );
};

export default ProfileAvatarSection;
